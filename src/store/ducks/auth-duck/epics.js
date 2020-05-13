import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { AuthActionTypes } from './actions-types';
import { AuthStorage } from './auth-storage';
export class AuthEpics {
    static headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic Y2FybG9zLmdhbGFyY2U6RWRxQ3lOcE1pWXlQQlE0QkhacTNFUXB6'
    }
    static register(action$, state$, { ajaxPost }) {
        return action$.pipe(ofType(AuthActionTypes.REGISTER_PROG), switchMap(({ payload }) => {
            return ajaxPost('/customers/', payload.body, this.headers).pipe(pluck('response'), flatMap(user => {
                AuthStorage.setUser(user);
                return of(
                    {
                        type: AuthActionTypes.REGISTER_SUCC,
                        payload: { user }
                    },
                );
            })
                , catchError((err) => {
                    return of({ type: AuthActionTypes.REGISTER_FAIL, payload: { err, message: err?.response?.detail, status: err?.status } });
                }));

        }));
    }




}