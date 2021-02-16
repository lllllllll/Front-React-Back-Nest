import { combineReducers } from 'redux';
import types from './types';

function checkAction(state: {}, action: { type: string; }, typeCase: { success: string; failure: string; loading: string; }) {
  switch (action.type) {
    case typeCase.success:
    case typeCase.failure:
    case typeCase.loading:
      return Object.assign({}, state, { ...action });
    default:
      return state;
  }
};

const getUsers = (state = {}, action: any) => checkAction(state, action, types.getUsers);
const getProducts = (state = {}, action: any) => checkAction(state, action, types.getProducts);
const addProduct = (state = {}, action: any) => checkAction(state, action, types.addProduct);
const editProducts = (state = {}, action: any) => checkAction(state, action, types.editProduct);
const delProducts = (state = {}, action: any) => checkAction(state, action, types.delProduct);

const rootReducer = combineReducers({
  getUsers, getProducts, addProduct, editProducts, delProducts
});

export default rootReducer;