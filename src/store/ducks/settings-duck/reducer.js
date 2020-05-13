import { SettingsActionTypes } from './actions-types';
const initialAuthState = {
  isProgress: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  config: {}
};
export function SettingsReducer(state = initialAuthState, action) {
  switch (action.type) {
    case SettingsActionTypes.GET_SETTINGS_PROG:
      return { ...state, isProgress: true };

    case SettingsActionTypes.GET_SETTINGS_SUCC:
      return { ...state, isProgress: false, config: action.payload.config };

    case SettingsActionTypes.GET_SETTINGS_FAIL:
      return { ...state, isProgress: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };





    default:
      return state;
  }
};