import orderModel from '../models/orderModel.js'
import userModel from "../models/userModel.js";
import transporter from "../config/nodemailer.js";

// ------------------------------ Placing order using COD Method ----------------------------------------------

const placeOrder = async (req,res) => {
    try {
        
        const {userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'COD',
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        // For Email notification when new order 

        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: "🛒 New Order Received - Noorza",
          html: `
    <h2>New Order Received</h2>

    <p><strong>Customer:</strong> ${address.firstName} ${address.lastName}</p>
    <p><strong>Email:</strong> ${address.email}</p>
    <p><strong>Phone:</strong> ${address.phone}</p>
    <p><strong>Address:</strong> ${address.street}, ${address.city}</p>

    <h3>Products</h3>

    ${items
      .map(
        (item) => `
      <p>
        ${item.name}<br/>
        Size: ${item.size}<br/>
        Quantity: ${item.quantity}<br/>
        Price: Rs ${item.price}
      </p>
      <hr/>
    `,
      )
      .join("")}

    <h3>Total: Rs ${amount}</h3>
  `,
        });


        // ------------------------------------------------------------------------------------

        await userModel.findByIdAndUpdate(userId,{cartData:{}})
        res.json({success:true, message:'Order Placed'})


    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        
    }

}

// Placing order using Stripe Method

const placeOrderStripe = async (req,res) => {

}


// Placing order using Razorpay Method

const placeOrderRazorpay = async (req,res) => {

}


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

export  {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus }
