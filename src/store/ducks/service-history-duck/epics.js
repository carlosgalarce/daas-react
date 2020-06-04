import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { ServiceHistoryActionTypes } from './actions-types';

export class ServiceHistoryEpics {
    static getServiceHistory(action$, state$, { ajaxGet, CORE_API_URL, JSON_TOKEN }) {
        return action$.pipe(ofType(ServiceHistoryActionTypes.GET_SERVICE_HISTORY_PROG), switchMap(() => {
            return ajaxGet(`${CORE_API_URL}/GetActivityList?filter.dealGroupID=${state$?.value?.settings?.customerInfo?.Customer?.DealerGroupId}&filter.customerID=${state$?.value?.settings?.customerInfo?.Customer?.CustomerId}&filter.jsonToken=${JSON_TOKEN}`).pipe(pluck('response'), flatMap(obj => {
                return of(
                    {
                        type: ServiceHistoryActionTypes.GET_SERVICE_HISTORY_SUCC,
                        payload: { serviceHistory: obj?.Data }
                    }
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: ServiceHistoryActionTypes.GET_SERVICE_HISTORY_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }






}