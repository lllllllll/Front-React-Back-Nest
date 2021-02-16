import { get } from './services';
import types from './types';
import { api } from '../shared/constants';
// const api = 'http://localhost:3010/user';

export const fetchUser = () => (dispatch: any) => get(dispatch, types.getUserAll, `${api}/user`);