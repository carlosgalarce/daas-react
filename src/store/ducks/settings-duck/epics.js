import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { SettingsActionTypes } from './actions-types';
import { SettingsActions } from '.';

export class SettingsEpics {
    static getSettings(action$, state$, { ajaxGet, SCHEDULE_API_URL, HEADERS }) {
        return action$.pipe(ofType(SettingsActionTypes.GET_SETTINGS_PROG), switchMap(() => {
            return ajaxGet(`${SCHEDULE_API_URL}/settings/`, HEADERS).pipe(pluck('response'), flatMap(array => {
                let config = {};
                array.forEach(element => {
                    if (element['name'] === 'company_working_plan') {
                        config[element['name']] = JSON.parse(element['value']);
                    }
                    else {

                        config[element['name']] = element['value'];
                    }
                });
                return of(
                    {
                        type: SettingsActionTypes.GET_SETTINGS_SUCC,
                        payload: { config }
                    },
                    SettingsActions.getCustomerInfo()
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: SettingsActionTypes.GET_SETTINGS_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }

    static getCustomerInfo(action$, state$, { ajaxGet, CORE_API_URL, HEADERS, JSON_TOKEN }) {
        return action$.pipe(ofType(SettingsActionTypes.GET_CUSTOMER_INFO_PROG), switchMap(() => {
            return ajaxGet(`${CORE_API_URL}/GetScheduleCustomerInfo?DealerNumber=${state$?.value?.settings?.config?.company_name}&ScheduleEmail=${state$?.value?.auth?.user?.email}&JsonToken=${JSON_TOKEN}`, HEADERS).pipe(pluck('response'), flatMap(obj => {
                return of(
                    {
                        type: SettingsActionTypes.GET_CUSTOMER_INFO_SUCC,
                        payload: { customerInfo: obj?.Data }
                    },
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: SettingsActionTypes.GET_CUSTOMER_INFO_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }




}