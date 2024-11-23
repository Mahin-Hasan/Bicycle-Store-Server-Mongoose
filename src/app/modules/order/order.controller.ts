/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { orderService } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;

    const result = await orderService.createOrder(orderData);

    res.send({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.send({
      message: 'Failed to create order',
      success: false,
      error: error.message || error,
      stack: error.stack,
    });
  }
};

const getTotalRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderService.getTotalRevenue();

    res.send({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (error: any) {
    res.send({
      message: 'Failed to calculate revenue',
      success: false,
      error: error.message || error,
      stack: error.stack,
    });
  }
};

export const orderController = {
  createOrder,
  getTotalRevenue,
};
