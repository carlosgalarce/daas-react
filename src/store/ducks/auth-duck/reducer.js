import { AuthActionTypes } from './actions-types';
const initialAuthState = {
  isProgress: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  user: null,
  registerUserSucc: false,
  userProfile: null
};
export function AuthReducer(state = initialAuthState, action) {
  switch (action.type) {
    case AuthActionTypes.LOGIN_PROG:
      return { ...state, isProgress: true };

    case AuthActionTypes.LOGIN_SUCC:
      return { ...state, isProgress: false, };

    case AuthActionTypes.LOGIN_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };

    case AuthActionTypes.GET_USER_PROFILE_PROG:
      return { ...state, isProgress: true };

    case AuthActionTypes.GET_USER_PROFILE_SUCC:
      return { ...state, isProgress: false, userProfile: action.payload.userProfile };

    case AuthActionTypes.GET_USER_PROFILE_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };


    case AuthActionTypes.REGISTER_USER_PROG:
      return { ...state, isProgress: true };

    case AuthActionTypes.REGISTER_USER_SUCC:
      return { ...state, isProgress: false, registerUserSucc: true };

    case AuthActionTypes.REGISTER_USER_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };

    case AuthActionTypes.CLEAR_REGISTER_USER_SUCC:
      return { ...state, registerUserSucc: false };


    case AuthActionTypes.REGISTER_CUSTOMER_PROG:
      return { ...state, isProgress: true };

    case AuthActionTypes.REGISTER_CUSTOMER_SUCC:
      return { ...state, isProgress: false, userProfile: action.payload.user };

    case AuthActionTypes.REGISTER_CUSTOMER_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };





    case AuthActionTypes.SET_USER:
      return { ...state, user: action.payload.user };

    default:
      return state;
  }
};