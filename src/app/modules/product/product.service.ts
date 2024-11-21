import { IBicycle } from './product.interface';
import Bicycle from './product.model';

const createProduct = async (payload: IBicycle) => {
  const result = await Bicycle.create(payload);
  return result;
};

export const productService = {
  createProduct,
};
