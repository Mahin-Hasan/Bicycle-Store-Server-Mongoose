import { Router } from "express";
import { orderController } from "./order.controller";

const orderRoute = Router();

orderRoute.post('/orders', orderController.createOrderController);
orderRoute.get('/orders/revenue', orderController.getTotalRevenue);

export default orderRoute;
