import { Document } from 'mongoose';

export interface Product extends Document {
  _id: string;
  title: string;
  description: string;
  photos: string;
  price: number;
}

export interface Products {
  products: Product[];
}

export const headColumn = ['title', 'description', 'photos', 'price'];
