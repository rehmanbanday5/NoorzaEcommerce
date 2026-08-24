import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin" || !decoded.id) {
      return res.json({
        success: false,
        message: "Not Authorized. Login Again",
      });
    }

    req.adminId = decoded.id;

    next();
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: "Session expired. Login Again",
    });
  }
};

export default adminAuth;
