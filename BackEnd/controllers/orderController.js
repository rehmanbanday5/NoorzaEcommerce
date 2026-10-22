import orderModel from '../models/orderModel.js'
import userModel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";

// ------------------------------ Placing order using COD Method ----------------------------------------------

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const paymentMethod = req.body.paymentMethod || "COD";
    const transactionId = String(req.body.transactionId || "").trim();

    const allowedMethods = ["COD", "Easypaisa", "Bank Transfer"];

    if (!allowedMethods.includes(paymentMethod)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment method.",
      });
    }

    if (
      !userId ||
      !Array.isArray(items) ||
      items.length === 0 ||
      !address ||
      typeof amount !== "number" ||
      !Number.isFinite(amount) ||
      amount <= 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid order information.",
      });
    }

    const isCOD = paymentMethod === "COD";

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod,
      payment: false,
      transactionId: isCOD ? "" : transactionId,
      paymentStatus: isCOD
        ? "Not Required"
        : transactionId
          ? "Submitted"
          : "Pending",
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "🛒 New Order Received - Noorza",
        html: `
                    <h2>New Order Received</h2>
                    <p><strong>Order ID:</strong> ${newOrder._id}</p>
                    <p><strong>Customer:</strong> ${address.firstName} ${address.lastName}</p>
                    <p><strong>Email:</strong> ${address.email}</p>
                    <p><strong>Phone:</strong> ${address.phone}</p>
                    <p><strong>Address:</strong> ${address.street}, ${address.city}</p>
                    <p><strong>Payment Method:</strong> ${paymentMethod}</p>
                    <p><strong>Payment Status:</strong> ${newOrder.paymentStatus}</p>
                    <h3>Products</h3>
                    ${items
                      .map(
                        (item) => `
                        <p>
                            ${item.name}<br/>
                            Size: ${item.size}<br/>
                            Quantity: ${item.quantity}<br/>
                            Price: Rs ${item.price}
                        </p><hr/>
                    `,
                      )
                      .join("")}
                    <h3>Total: Rs ${amount}</h3>
                `,
      });
    } catch (emailError) {
      // Email failure must not turn a saved order into a failed response.
      console.error("Order email failed:", emailError.message);
    }

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    return res.json({
      success: true,
      message: "Order Placed",
      order: newOrder,
    });
  } catch (error) {
    console.error("Place order error:", error);
    return res.status(500).json({
      success: false,
      message: error.message || "Unable to place order.",
    });
  }
};



const getPaymentInfo = async (req, res) => {
  try {
    const paymentInfo = {
      Easypaisa: {
        accountTitle:
          process.env.EASYPAISA_ACCOUNT_TITLE || "ABDUL NOOR BANDAY ",
        accountNumber: process.env.EASYPAISA_ACCOUNT_NUMBER || "03334913423",
      },
      "Bank Transfer": {
        accountTitle: process.env.BANK_ACCOUNT_TITLE || "ABDUL NOOR BANDAY",
        accountNumber: process.env.BANK_ACCOUNT_NUMBER || " 08210116188312",
        bankName: process.env.BANK_NAME || "MEEZAN BANK",
        iban: process.env.BANK_IBAN || "PK21MEZN0008210116188312",
      },
    };

    return res.json({
      success: true,
      paymentInfo,
    });
  } catch (error) {
    console.error("Payment info error:", error);
    return res.status(500).json({
      success: false,
      message: "Unable to load payment information.",
    });
  }
};



// All orders data for admin pannel

const allOrders = async (req,res) => {
    try {
        
        const orders = await orderModel.find({})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
}

// User order data for frontend 

const userOrders = async (req,res) => {
    try {
        
        const {userId} = req.body

        const orders = await orderModel.find({userId})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Update order status for admin panel

const updateStatus = async (req,res) => {
    try {
        
        const {orderId, status} = req.body

        await orderModel.findByIdAndUpdate(orderId,{status})
        res.json({success:true, message:'Status Updated'})

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }

}

const updatePaymentStatus = async (req, res) => {
  try {
    const { orderId, paymentStatus } = req.body;

    if (!["Pending", "Verified", "Rejected"].includes(paymentStatus)) {
      return res.status(400).json({
        success: false,
        message: "Invalid payment status.",
      });
    }

    const order = await orderModel.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found.",
      });
    }

    if (order.paymentMethod === "COD") {
      return res.status(400).json({
        success: false,
        message: "COD orders do not require payment verification.",
      });
    }

    if (!["Easypaisa", "Bank Transfer"].includes(order.paymentMethod)) {
      return res.status(400).json({
        success: false,
        message: "Unsupported payment method.",
      });
    }

    if (paymentStatus === "Verified" && !order.transactionId?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Transaction reference is missing.",
      });
    }

    order.paymentStatus = paymentStatus;
    order.payment = paymentStatus === "Verified";

    await order.save();

    return res.json({
      success: true,
      message: "Payment status updated successfully.",
    });
  } catch (error) {
    console.error("Update payment status error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to update payment status.",
    });
  }
};


// Delete order from admin panel

const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.body;

    await orderModel.findByIdAndDelete(orderId);

    res.json({
      success: true,
      message: "Order Deleted",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export {
  placeOrder,
  allOrders,
  userOrders,
  updateStatus,
  updatePaymentStatus,
  getPaymentInfo,
  deleteOrder,
};