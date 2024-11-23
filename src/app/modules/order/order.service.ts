import Order from './order.model';
import { IOrder } from './order.interface';


const createOrder = async (orderData: IOrder) => {
  const newOrder = await Order.create(orderData);
  return newOrder;
};

//trying aggregate
const getTotalRevenue = async () => {
  const totalRevenue = await Order.aggregate([]);

  return totalRevenue;
};

export const orderService = {
  createOrder,
  getTotalRevenue,
};
