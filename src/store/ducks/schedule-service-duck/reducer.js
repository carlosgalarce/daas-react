import { ScheduleServiceActionTypes } from './actions-types';
const initialAuthState = {
  isProgressServices: false,
  isProgressRecomndServices: false,
  isProgressProviders: false,
  isProgressAvailabilities: false,
  isProgressBookAppointment: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  services: [],
  recommendedServices: [],
  providers: [],
  availabilties: [],
  appointment: null
};
export function ScheduleServiceReducer(state = initialAuthState, action) {
  switch (action.type) {
    case ScheduleServiceActionTypes.GET_SERVICES_PROG:
      return { ...state, isProgressServices: true };

    case ScheduleServiceActionTypes.GET_SERVICES_SUCC:
      return { ...state, isProgressServices: false, services: action.payload.services };

    case ScheduleServiceActionTypes.GET_SERVICES_FAIL:
      return { ...state, isProgressServices: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };


    case ScheduleServiceActionTypes.GET_RECOMMENDED_SERVICES_PROG:
      return { ...state, isProgressRecomndServices: true };

    case ScheduleServiceActionTypes.GET_RECOMMENDED_SERVICES_SUCC:
      return { ...state, isProgressRecomndServices: false, recommendedServices: action.payload.recommendedServices };

    case ScheduleServiceActionTypes.GET_RECOMMENDED_SERVICES_FAIL:
      return { ...state, isProgressRecomndServices: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };


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



    case ScheduleServiceActionTypes.BOOK_APPOINTMENT_PROG:
      return { ...state, isProgressBookAppointment: true };

    case ScheduleServiceActionTypes.BOOK_APPOINTMENT_SUCC:
      return { ...state, isProgressBookAppointment: false, appointment: action.payload.appointment };

    case ScheduleServiceActionTypes.BOOK_APPOINTMENT_FAIL:
      return { ...state, isProgressBookAppointment: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };


    case ScheduleServiceActionTypes.CLEAR_APPOINTMENT:
      return { ...state, appointment: null };

    default:
      return state;
  }
};