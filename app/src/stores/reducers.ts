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

const rootReducer = combineReducers({
  getUsers, getProducts
});

export default rootReducer;