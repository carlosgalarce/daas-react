import { combineReducers } from 'redux';
import { combineEpics } from 'redux-observable';
import * as auth from './ducks/auth-duck';
import * as settings from './ducks/settings-duck';
import * as scheduleservice from './ducks/schedule-service-duck';

const appReducer = combineReducers({
  auth: auth.AuthReducer,
  settings: settings.SettingsReducer,
  schedule: scheduleservice.ScheduleServiceReducer
});
export const rootReducer = (state, action) => {
  if (action.type === auth.AuthActionTypes.LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
export const rootEpic = combineEpics(
  // more epics functions go here
  auth.AuthEpics.register,


  settings.SettingsEpics.getSettings,
  settings.SettingsEpics.getCustomerInfo,


  scheduleservice.ScheduleServiceEpics.getServices,
  scheduleservice.ScheduleServiceEpics.getProviders,
  scheduleservice.ScheduleServiceEpics.getAvailabilities,



);
