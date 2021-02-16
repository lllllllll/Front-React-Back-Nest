import { get } from './services';
import types from './types';
import { api } from '../shared/constants';

export const fetchUsers = () => (dispatch: any) => get(dispatch, types.getUsers, `${api}/user`);
export const fetchProducts = () => (dispatch: any) => get(dispatch, types.getProducts, `${api}/product`);