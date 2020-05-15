import { ScheduleServiceActionTypes } from './actions-types';
const initialAuthState = {
  isProgressServices: false,
  isProgressProviders: false,
  isProgressAvailabilities: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  services: [],
  providers: [],
  availabilties: []
};
export function ScheduleServiceReducer(state = initialAuthState, action) {
  switch (action.type) {
    case ScheduleServiceActionTypes.GET_SERVICES_PROG:
      return { ...state, isProgressServices: true };

    case ScheduleServiceActionTypes.GET_SERVICES_SUCC:
      return { ...state, isProgressServices: false, services: action.payload.services };

    case ScheduleServiceActionTypes.GET_SERVICES_FAIL:
      return { ...state, isProgressServices: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };



    case ScheduleServiceActionTypes.GET_PROVIDERS_PROG:
      return { ...state, isProgressProviders: true };

    case ScheduleServiceActionTypes.GET_PROVIDERS_SUCC:
      return { ...state, isProgressProviders: false, providers: action.payload.providers };

    case ScheduleServiceActionTypes.GET_PROVIDERS_FAIL:
      return { ...state, isProgressProviders: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };



    case ScheduleServiceActionTypes.GET_AVAILABILITIES_PROG:
      return { ...state, isProgressAvailabilities: true };

    case ScheduleServiceActionTypes.GET_AVAILABILITIES_SUCC:
      return { ...state, isProgressAvailabilities: false, availabilties: action.payload.availabilties };

    case ScheduleServiceActionTypes.GET_AVAILABILITIES_FAIL:
      return { ...state, isProgressAvailabilities: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };
    default:
      return state;
  }
};