import { FinanceActionTypes } from './actions-types';
const initialAuthState = {
  isProgress: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  transaction: null
};
export function FinanceReducer(state = initialAuthState, action) {
  switch (action.type) {
    case FinanceActionTypes.GET_TRANSACTION_PROG:
      return { ...state, isProgress: true };

    case FinanceActionTypes.GET_TRANSACTION_SUCC:
      return { ...state, isProgress: false, transaction: action.payload.transaction };

    case FinanceActionTypes.GET_TRANSACTION_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };





    default:
      return state;
  }
};