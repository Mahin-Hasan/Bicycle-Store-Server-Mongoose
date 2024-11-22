import { Request, Response } from 'express';
import { productService } from './product.service';

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
    const result = await productService.getAllProducts();
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

export const productController = {
  createProduct,
  getAllProducts
};
