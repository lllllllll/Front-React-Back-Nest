import { Document } from 'mongoose';

export interface User extends Document {
  _id: string;
  username: string;
  password: string;
  name: string;
  lastname: string;
  email: string;
  birthday: string;
  avatar: string;
}

export interface Users {
  users: User[];
}

export const headColumn = ['username', 'password', 'name', 'lastname', 'birthday', 'email', 'avatar'];