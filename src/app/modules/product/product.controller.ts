import { Request, Response } from 'express';
import { productService } from './product.service';
import { productQuery } from './product.interface';

const createProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const result = await productService.createProduct(body);

    res.send({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.send({
      message: 'Validation failed',
      success: false,
      error: error,
    });
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const passedQuery: productQuery = req.query;
    const result = await productService.getAllProducts(passedQuery);
    res.send({
      message: 'All Products Retrived Successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.send({
      message: 'Validation failed',
      success: false,
      error: error,
    });
  }
};
//single product
const getSingleProductbyId = async (req: Request, res: Response) => {
  try {
    const  productId  = req.params.productId;
    const result = await productService.getSingleProductbyId(productId);
    res.send({
      message: 'single Product Retrived Successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.send({
      message: 'Validation failed',
      success: false,
      error: error,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProductbyId,
};
