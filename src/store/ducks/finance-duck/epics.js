import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { FinanceActionTypes } from './actions-types';

export class FinanceEpics {
    static getTransaction(action$, state$, { ajaxGet, CORE_API_URL, JSON_TOKEN }) {
        return action$.pipe(ofType(FinanceActionTypes.GET_TRANSACTION_PROG), switchMap(() => {
            // dealGroupID=${state$?.value?.settings?.customerInfo?.Customer?.DealerGroupId}&dealerNumber=${state$?.value?.settings?.customerInfo?.Customer?.CustomerId}
            return ajaxGet(`${CORE_API_URL}/VINSupport/GetFinancialTransactionDetails?DealGroupID=${state$?.value?.settings?.customerInfo?.Customer?.DealerGroupId}&CustomerNo=${state$?.value?.settings?.customerInfo?.Customer?.LegacyCustomerID}&VINNUMBER=${state$?.value?.settings?.customerInfo?.Vehicles?.VIN}&jsonToken=${JSON_TOKEN}`).pipe(pluck('response'), flatMap(obj => {
                return of(
                    {
                        type: FinanceActionTypes.GET_TRANSACTION_SUCC,
                        payload: { transaction: obj?.Data }
                    }
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: FinanceActionTypes.GET_TRANSACTION_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }






}