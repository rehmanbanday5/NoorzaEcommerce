import express from 'express'
import {placeOrder, allOrders, userOrders, updateStatus, deleteOrder,    updatePaymentStatus,   getPaymentInfo } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// Admin Features

orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/orders", adminAuth, updateStatus);
orderRouter.post("/status", adminAuth, updateStatus);
orderRouter.post("/delete", adminAuth, deleteOrder);
orderRouter.post("/payment-status", adminAuth, updatePaymentStatus);
orderRouter.get("/payment-info", getPaymentInfo);


// Payment Features
orderRouter.post('/place',authUser,placeOrder)


// User Feature

orderRouter.post('/userOrders',authUser,userOrders)

export default orderRouter;
