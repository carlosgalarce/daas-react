import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import * as auth from './ducks/auth-duck';
import * as settings from './ducks/settings-duck';
import * as scheduleservice from './ducks/schedule-service-duck';
import * as vehicle from './ducks/vehicle-duck';
import * as serviceHistory from './ducks/service-history-duck';

const appReducer = combineReducers({
  auth: auth.AuthReducer,
  settings: settings.SettingsReducer,
  schedule: scheduleservice.ScheduleServiceReducer,
  vehicle: vehicle.VehicleReducer,
  serviceHistory: serviceHistory.ServiceHistoryReducer
});
export const rootReducer = (state, action) => {
  if (action.type === auth.AuthActionTypes.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
export const rootEpic = combineEpics(
  // more epics functions go here
  auth.AuthEpics.registerCustomer,
  auth.AuthEpics.registerUser,
  auth.AuthEpics.getAuthToken,
  auth.AuthEpics.getUserProfile,



  settings.SettingsEpics.getSettings,
  settings.SettingsEpics.getCustomerInfo,


  scheduleservice.ScheduleServiceEpics.getServices,
  scheduleservice.ScheduleServiceEpics.getProviders,
  scheduleservice.ScheduleServiceEpics.getAvailabilities,
  scheduleservice.ScheduleServiceEpics.bookAppointment,
  scheduleservice.ScheduleServiceEpics.getRecommendedServices,


  vehicle.VehicleEpics.getVehiclePrice,
  vehicle.VehicleEpics.getVinSpecs,


  serviceHistory.ServiceHistoryEpics.getServiceHistory



);
