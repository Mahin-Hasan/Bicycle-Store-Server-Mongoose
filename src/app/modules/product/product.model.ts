import { Schema, model } from 'mongoose';
import { IBicycle } from './product.interface';

const bicycleSchema = new Schema<IBicycle>(
  {
    name: {
      type: String,
      required: [true, 'Bicycle name must be provided'],
      minlength: [3, 'Name must be at least 3 characters long'],
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Brand name must be provided'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [1, 'Price must be at least 1'],
      validate: {
        validator: function (value) {
          return value > 0;
        },
        message: 'Price must be a positive number',
      },
    },
    type: {
      type: String,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'],
        message: 'Type {VALUE} in not a valid type',
      },
      required: [true, 'Type is a required field'],
    },
    description: {
      type: String,
      required: [true, 'Description must be provided'],
      minlength: [10, 'Description must be at least 10 characters long'],
    },
    quantity: {
      type: Number,
      required: [true, 'Qualtity is a required filed'],
      min: [0, 'Quantity cannot be less than 0'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'inStock is a required field'],
      default: true,
    },
  },
  {
    timestamps: true, // for creating time stamps during the post method | createdAt in timestamps is immutable by default
  },
);

//query for searchTerm Query
bicycleSchema.pre('find', function (next) {
  const query = this.getQuery();
  if (query.name || query.brand || query.type) {
    this.find({
      $or: [{ name: query.name }, { brand: query.brand }, { type: query.type }],
    });
  }
  next();
});

const Bicycle = model<IBicycle>('Bicycle', bicycleSchema);

export default Bicycle;
