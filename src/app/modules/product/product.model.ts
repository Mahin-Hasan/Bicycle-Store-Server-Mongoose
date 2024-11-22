import { Schema, model } from 'mongoose';
import { IBicycle } from './product.interface';

const bicycleSchema = new Schema<IBicycle>(
  {
    name: { type: String, required: [true, 'Bicycle name must be provided'] },
    brand: { type: String, required: [true, 'Brand name must be provided'] },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      validate: {
        validator: function (value) {
          return value > 0;
        },
        message: 'Price must be a positive number',
      },
    },
    type: {
      type: String,
      enum: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
      required: true,
    },
    description: {
      type: String,
      required: [true, 'Description must be provided'],
    },
    quantity: {
      type: Number,
      required: [true, 'Qualtity is a required filed'],
    },
    inStock: { type: Boolean, required: [true, 'inStock is a required field'] },
  },
  {
    timestamps: true, // for creating time stamps during the post method
  },
);

const Bicycle = model<IBicycle>('Bicycle', bicycleSchema);

export default Bicycle;
