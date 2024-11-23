import { z } from 'zod';

const bicycleValidationSchemaZod = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at least 3 characters long' })
    .trim()
    .nonempty({ message: 'Name is required' }),
  brand: z.string().trim().nonempty({ message: 'Brand name is required' }),
  price: z
    .number()
    .positive({ message: 'Price must be a positive number' })
    .min(1, { message: 'Price must be at least 1' }),
  type: z.enum(['Mountain', 'Road', 'Hybrid', 'BMX', 'Electric'], {
    errorMap: () => ({ message: 'Invalid bicycle type' }),
  }),
  description: z
    .string()
    .min(10, { message: 'Description must be at least 10 characters long' })
    .nonempty({ message: 'Description is required' }),
  quantity: z
    .number()
    .nonnegative({ message: 'Quantity cannot be less than 0' }),
  inStock: z.boolean().default(true),
  createdAt: z.date().default(new Date()),
  updatedAt: z.date().default(new Date()),
});

export default bicycleValidationSchemaZod;
