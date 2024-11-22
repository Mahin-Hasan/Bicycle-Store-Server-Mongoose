import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRoute from './app/modules/product/product.route';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//end points
app.use('/api', productRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Bicycle Store!');
});

export default app;
