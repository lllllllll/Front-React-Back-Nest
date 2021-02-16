import { del, get, patch, post } from './services';
import types from './types';
import { api } from '../shared/constants';

export const fetchUsers = () => (dispatch: any) => get(dispatch, types.getUsers, `${api}/user`);
export const fetchProducts = () => (dispatch: any) => get(dispatch, types.getProducts, `${api}/product`);
export const fetchProductAdd = (data: any) => (dispatch: any) => post(dispatch, types.addProduct, `${api}/product`, data);
export const fetchProductDel = (id: string) => (dispatch: any) => del(dispatch, types.delProduct, `${api}/product/${id}`);
export const fetchProductEdit = (id: string, data: any) => (dispatch: any) => patch(dispatch, types.editProduct, `${api}/product/${id}`, data);