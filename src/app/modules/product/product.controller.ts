/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { productService } from './product.service';
import { productQuery } from './product.interface';
import bicycleValidationSchemaZod from './product.validation';

const createProduct = async (req: Request, res: Response) => {
  try {
    // const body = req.body;
    // const result = await productService.createProduct(body);
    //Implementing Zod validation
    const bicycleData = req.body;
    const zodParsedData = bicycleValidationSchemaZod.parse(bicycleData);
    const result = await productService.createProduct(zodParsedData);

    res.send({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.send({
      message: 'Failed to create Product',
      success: false,
      error: error || 'Something went wrong',
      stack: error.stack,
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
  } catch (error: any) {
    res.send({
      message: 'Failed to retrive all products',
      success: false,
      error: error.message || 'Something went wrong',
      stack: error.stack,
    });
  }
};
//single product
const getSingleProductbyId = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getSingleProductbyId(productId);
    res.send({
      message: 'single Product Retrived Successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.send({
      message: 'Failed to retrive single product',
      success: false,
      error: error.message || 'Something went wrong',
      stack: error.stack,
    });
  }
};
//update single product
const updateSingleProductbyId = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const updatedData = req.body;
    const result = await productService.updateSingleProductbyId(
      productId,
      updatedData,
    );
    res.send({
      message: 'Bicycle updated successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.send({
      message: 'Failed to update product',
      success: false,
      error: error.message || 'Something went wrong',
      stack: error.stack,
    });
  }
};

//delete single product
const deleteSingleProductbyId = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    await productService.deleteSingleProductbyId(productId);
    res.send({
      message: 'Bicycle deleted successfully',
      success: true,
      data: {},
    });
  } catch (error: any) {
    res.send({
      message: 'Failed to delete product',
      success: false,
      error: error.message || 'Something went wrong',
      stack: error.stack,
    });
  }
};

export const productController = {
  createProduct,
  getAllProducts,
  getSingleProductbyId,
  updateSingleProductbyId,
  deleteSingleProductbyId,
};
