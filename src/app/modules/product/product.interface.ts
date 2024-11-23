export interface IBicycle {
  name: string;
  brand: string;
  price: number;
  type: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
  description: string;
  quantity: number;
  inStock: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface productQuery {
  name?: string;
  brand?: string;
  type?: 'Mountain' | 'Road' | 'Hybrid' | 'BMX' | 'Electric';
}
