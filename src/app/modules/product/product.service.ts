import { IBicycle, productQuery } from './product.interface';
import Bicycle from './product.model';


//create product
const createProduct = async (payload: IBicycle) => {
  const result = await Bicycle.create(payload);
  return result;
};
// get all products | also perform query operations 
const getAllProducts = async (query: productQuery | undefined) => {
  let result;
  result = await Bicycle.find();

  if (query && Object.keys(query).length > 0) {
    result = await Bicycle.find(query);
  } else {
    result = await Bicycle.find();
  }
  return result;
};

const getSingleProductbyId = async (id: string) => {
  const result = await Bicycle.findById(id);
  return result;
};
//update single product 
const updateSingleProductbyId = async (
  id: string,
  updatedData: Partial<IBicycle>,
) => {
  const doesProductExist = await Bicycle.findById(id);
  if (!doesProductExist) {
    throw new Error('Product not found');
  }
  //updating the bicycle Product
  const updatedProduct = await Bicycle.findByIdAndUpdate(
    id,
    { $set: updatedData },
    { new: true, runValidators: true },
  );
  return updatedProduct;
};

//delete single product
const deleteSingleProductbyId = async (id: string) => {
  const result = Bicycle.findByIdAndDelete(id);
  return result;
};

export const productService = {
  createProduct,
  getAllProducts,
  getSingleProductbyId,
  updateSingleProductbyId,
  deleteSingleProductbyId,
};
