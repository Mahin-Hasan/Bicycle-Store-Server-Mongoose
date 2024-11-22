import { Router } from 'express';
import { productController } from './product.controller';

const productRoute = Router();

productRoute.post('/products', productController.createProduct);
productRoute.get('/products', productController.getAllProducts);
productRoute.get('/products/:productId', productController.getSingleProductbyId);
productRoute.put('/products/:productId',productController.updateSingleProductbyId);
productRoute.delete('/products/:productId',productController.deleteSingleProductbyId);

export default productRoute;
