import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import productRouter from './app/modules/product/product.router';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

//end points
app.use('/api', productRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Bicycle Store!');
});

export default app;
