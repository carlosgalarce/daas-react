import { LoyaltyActionTypes } from './actions-types';
const initialAuthState = {
  isProgress: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  rewardPoints: null
};
export function LoyaltyReducer(state = initialAuthState, action) {
  switch (action.type) {
    case LoyaltyActionTypes.GET_REWARD_POINTS_PROG:
      return { ...state, isProgress: true };

    case LoyaltyActionTypes.GET_REWARD_POINTS_SUCC:
      return { ...state, isProgress: false, rewardPoints: action.payload.rewardPoints };

    case LoyaltyActionTypes.GET_REWARD_POINTS_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };





    default:
      return state;
  }
};