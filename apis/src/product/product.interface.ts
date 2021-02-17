import { Document } from 'mongoose';

export interface Product extends Document {
  _id: string;
  title: string;
  expire: string;
  description: string;
  photos: string;
  price: number;
}

export interface Products {
  products: Product[];
}

export const headColumn = ['title', 'expire', 'description', 'photos', 'price'];
