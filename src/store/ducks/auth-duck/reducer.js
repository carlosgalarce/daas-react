import { AuthActionTypes } from './actions-types';
const initialAuthState = {
  isProgress: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  user: null,
  profileUpdateSucc: false
};
export function AuthReducer(state = initialAuthState, action) {
  switch (action.type) {
    case AuthActionTypes.LOGIN_PROG:
      return { ...state, isProgress: true };

    case AuthActionTypes.LOGIN_SUCC:
      return { ...state, isProgress: false, };

    case AuthActionTypes.LOGIN_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };



    case AuthActionTypes.REGISTER_PROG:
      return { ...state, isProgress: true };

    case AuthActionTypes.REGISTER_SUCC:
      return { ...state, isProgress: false, user: action.payload.user };

    case AuthActionTypes.REGISTER_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };



    case AuthActionTypes.CLEAR_SUCCESS:
      return { ...state, profileUpdateSucc: false };

    case AuthActionTypes.SET_USER:
      return { ...state, user: action.payload.user };

    default:
      return state;
  }
};