import { model, Schema } from 'mongoose';
import { IOrder } from './order.interface';
import Bicycle from '../product/product.model';

const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      validate: {
        validator: function (value: string) {
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: '{VALUE} is not a valid email',
      },
      immutable: true, // email value will not be updated
    },
    product: {
      type: Schema.Types.ObjectId,
      required: [true, 'Product id is a required field'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is a required field'],
      min: [1, 'Quantity cannot be less than 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total Price is a required field'],
      min: [0, 'Total price must be a positive number'], 
      validate: {
        validator: function (value: number) {
          return value > 0;
        },
        message: 'Total Price value cannot be less than 0. you have provided {VALUE}',
      },
    },
  },
  {
    timestamps: true,
  },
);

// pre middleware for order creating validation
orderSchema.pre('save', async function (next) {
  const { product, quantity } = this; // extracting product id and quantity passed in body

  const bicycle = await Bicycle.findById(product); // Matching passed product Id with Bicycle product Id
  if (!bicycle) {
    throw new Error('Product not found');
  }
  // Check if sufficient stock is available
  if (bicycle.quantity < quantity) {
    throw new Error('Insufficient stock for this product');
  }
  // subtracting passed quantity from bicycle quantity
  bicycle.quantity -= quantity;
  if (bicycle.quantity === 0) {
    bicycle.inStock = false; //setting inStock to false when quantity equal to 0
  }
  await bicycle.save();
  next();
});

// Middleware for revenue calculation using aggregate
orderSchema.pre('aggregate', function (next) {
  const pipeline = this.pipeline();
  if (pipeline.length === 0) {
    pipeline.push(
      {
        $group: {
          _id: null, // null Groups all documents into one
          totalRevenue: {
            $sum: {
              $multiply: ['$quantity', '$totalPrice'],
            },
          },
        },
      },
      {
        $project: { _id: 0, totalRevenue: 1 }, // only showing totalRevenue
      },
    );
  }
  next();
});

const Order = model<IOrder>('Order', orderSchema);

export default Order;
