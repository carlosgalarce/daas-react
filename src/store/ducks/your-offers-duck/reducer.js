import { YourOffersActionTypes } from './actions-types';
const initialAuthState = {
  isProgress: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  coupons: null
};
export function YourOffersReducer(state = initialAuthState, action) {
  switch (action.type) {
    case YourOffersActionTypes.GET_COUPONS_PROG:
      return { ...state, isProgress: true };

    case YourOffersActionTypes.GET_COUPONS_SUCC:
      return { ...state, isProgress: false, coupons: action.payload.coupons };

    case YourOffersActionTypes.GET_COUPONS_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };





    default:
      return state;
  }
};