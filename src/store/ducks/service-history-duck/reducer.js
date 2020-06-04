import { ServiceHistoryActionTypes } from './actions-types';
const initialAuthState = {
  isProgress: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  history: null
};
export function ServiceHistoryReducer(state = initialAuthState, action) {
  switch (action.type) {
    case ServiceHistoryActionTypes.GET_SERVICE_HISTORY_PROG:
      return { ...state, isProgress: true };

    case ServiceHistoryActionTypes.GET_SERVICE_HISTORY_SUCC:
      return { ...state, isProgress: false, history: action.payload.serviceHistory };

    case ServiceHistoryActionTypes.GET_SERVICE_HISTORY_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };





    default:
      return state;
  }
};