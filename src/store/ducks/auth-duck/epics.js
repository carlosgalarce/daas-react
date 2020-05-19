import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { AuthActionTypes } from './actions-types';
import { AuthStorage } from './auth-storage';
import { toast } from 'react-toastify';
export class AuthEpics {


    static getAuthToken(action$, state$, { ajaxPost, AUTH0_URL, }) {
        return action$.pipe(ofType(AuthActionTypes.GET_AUTH_TOKEN_PROG), switchMap(({ payload }) => {
            return ajaxPost(`${AUTH0_URL}/oauth/token/`, payload.body).pipe(pluck('response'), flatMap(obj => {
                AuthStorage.setToken(obj?.access_token);
                return of(
                    {
                        type: AuthActionTypes.GET_AUTH_TOKEN_SUCC
                    }
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    toast.error(err?.response?.message, { autoClose: true });
                    return of({ type: AuthActionTypes.GET_AUTH_TOKEN_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }
    static registerUser(action$, state$, { ajaxPost, AUTH0_API_URL, }) {
        return action$.pipe(ofType(AuthActionTypes.REGISTER_USER_PROG), switchMap(({ payload }) => {
            return ajaxPost(`${AUTH0_API_URL}/users`, payload.body).pipe(pluck('response'), flatMap(() => {
                return of(
                    {
                        type: AuthActionTypes.REGISTER_USER_SUCC,
                    },
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    toast.error(err?.response?.message, { autoClose: true });
                    return of({ type: AuthActionTypes.REGISTER_USER_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }


    static registerCustomer(action$, state$, { ajaxPost, SCHEDULE_API_URL, HEADERS }) {
        return action$.pipe(ofType(AuthActionTypes.REGISTER_CUSTOMER_PROG), switchMap(({ payload }) => {
            return ajaxPost(`${SCHEDULE_API_URL}/customers/`, payload.body, HEADERS).pipe(pluck('response'), flatMap(user => {
                AuthStorage.setUser(user);
                return of(
                    {
                        type: AuthActionTypes.REGISTER_CUSTOMER_SUCC,
                        payload: { user }
                    },
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    toast.error(err?.response?.message, { autoClose: true });
                    return of({ type: AuthActionTypes.REGISTER_CUSTOMER_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }




}