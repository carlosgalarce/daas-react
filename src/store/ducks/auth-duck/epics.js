import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { AuthActionTypes } from './actions-types';
import { AuthStorage } from './auth-storage';
export class AuthEpics {
    static register(action$, state$, { ajaxPost, SCHEDULE_API_URL, HEADERS }) {
        return action$.pipe(ofType(AuthActionTypes.REGISTER_PROG), switchMap(({ payload }) => {
            return ajaxPost(`${SCHEDULE_API_URL}/customers/`, payload.body, HEADERS).pipe(pluck('response'), flatMap(user => {
                AuthStorage.setUser(user);
                return of(
                    {
                        type: AuthActionTypes.REGISTER_SUCC,
                        payload: { user }
                    },
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: AuthActionTypes.REGISTER_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }




}