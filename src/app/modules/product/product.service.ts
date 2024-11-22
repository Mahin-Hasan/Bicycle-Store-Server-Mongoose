import { IBicycle, productQuery } from './product.interface';
import Bicycle from './product.model';

const createProduct = async (payload: IBicycle) => {
  const result = await Bicycle.create(payload);
  return result;
};

const getAllProducts = async (query: productQuery | undefined) => {
  let result;

  if (query && Object.keys(query).length > 0) {
    result = await Bicycle.find(query);
  } else {
    result = await Bicycle.find();
  }
  return result;
};
const getSingleProductbyId = async (id: string) => {
  const result = await Bicycle.findById( id );
  return result;
};

export const productService = {
  createProduct,
  getAllProducts,
  getSingleProductbyId,
};
