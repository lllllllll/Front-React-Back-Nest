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

const getUser = (state = {}, action: any) => checkAction(state, action, types.getUsers);
const getUserAll = (state = {}, action: any) => checkAction(state, action, types.getUserAll);

const rootReducer = combineReducers({
  getUser, getUserAll
});

export default rootReducer;