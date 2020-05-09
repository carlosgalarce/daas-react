import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import * as auth from './ducks/auth-duck';

const appReducer = combineReducers({
  auth: auth.AuthReducer,
});
export const rootReducer = (state, action) => {
  if (action.type === auth.AuthActionTypes.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
export const rootEpic = combineEpics(
  // more epics functions go here
  auth.AuthEpics.login,




);