import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { SettingsActionTypes } from './actions-types';
import { HEADERS } from '../../services/config';

export class SettingsEpics {
    static getSettings(action$, state$, { ajaxGet }) {
        return action$.pipe(ofType(SettingsActionTypes.GET_SETTINGS_PROG), switchMap(() => {
            return ajaxGet('/settings/', HEADERS).pipe(pluck('response'), flatMap(array => {
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
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: SettingsActionTypes.GET_SETTINGS_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }




}