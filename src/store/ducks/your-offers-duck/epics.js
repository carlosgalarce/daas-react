import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { YourOffersActionTypes } from './actions-types';

export class YourOffersEpics {
    static getCoupons(action$, state$, { ajaxGet, CORE_API_URL, JSON_TOKEN }) {
        return action$.pipe(ofType(YourOffersActionTypes.GET_COUPONS_PROG), switchMap(() => {
            // dealGroupID=${state$?.value?.settings?.customerInfo?.Customer?.DealerGroupId}&dealerNumber=${state$?.value?.settings?.customerInfo?.Customer?.CustomerId}
            return ajaxGet(`${CORE_API_URL}/Coupon/GetCurrentCoupons?dealGroupID=${state$?.value?.settings?.customerInfo?.Customer?.DealerGroupId}&dealerNumber=${state$?.value?.settings?.customerInfo?.Customer?.ScheduleDealerNumber}&jsonToken=${JSON_TOKEN}`).pipe(pluck('response'), flatMap(obj => {
                return of(
                    {
                        type: YourOffersActionTypes.GET_COUPONS_SUCC,
                        payload: { coupons: obj?.Data?.Items }
                    }
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: YourOffersActionTypes.GET_COUPONS_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }






}