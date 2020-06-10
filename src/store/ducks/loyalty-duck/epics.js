import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { LoyaltyActionTypes } from './actions-types';

export class LoyaltyEpics {
    static getRewardPoints(action$, state$, { ajaxGet, CORE_API_URL, JSON_TOKEN }) {
        return action$.pipe(ofType(LoyaltyActionTypes.GET_REWARD_POINTS_PROG), switchMap(() => {
            // dealGroupID=${state$?.value?.settings?.customerInfo?.Customer?.DealerGroupId}&dealerNumber=${state$?.value?.settings?.customerInfo?.Customer?.CustomerId}
            return ajaxGet(`${CORE_API_URL}/Coupon/GetRewardPointsLog?dealGroupID=${state$?.value?.settings?.customerInfo?.Customer?.DealerGroupId}&customerID=${state$?.value?.settings?.customerInfo?.Customer?.CustomerId}&jsonToken=${JSON_TOKEN}`).pipe(pluck('response'), flatMap(obj => {
                return of(
                    {
                        type: LoyaltyActionTypes.GET_REWARD_POINTS_SUCC,
                        payload: { rewardPoints: obj?.Data?.Items }
                    }
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: LoyaltyActionTypes.GET_REWARD_POINTS_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }






}