import { Router } from 'express';
import { orderController } from './order.controller';

const orderRoute = Router();

orderRoute.post('/orders', orderController.createOrder);
orderRoute.get('/orders/revenue', orderController.getTotalRevenue);

export default orderRoute;
