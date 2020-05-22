import { AuthActionTypes } from './actions-types';
import { /* CLIENT_ID, */ AUDIENCE, GRANT_TYPE, /* CLIENT_SECRET, */ CLIENT_ID_2, CLIENT_SECRET_2 } from '../../services/config';

export class AuthActions {

    static login(body) {
        return {
            type: AuthActionTypes.LOGIN_PROG,
            payload: { body }
        };
    }

    static getAuthToken() {

        let body = { client_id: CLIENT_ID_2, client_secret: CLIENT_SECRET_2, audience: AUDIENCE, grant_type: GRANT_TYPE };
        return {
            type: AuthActionTypes.GET_AUTH_TOKEN_PROG,
            payload: { body }
        };
    }
    static registerUser(body) {
        return {
            type: AuthActionTypes.REGISTER_USER_PROG,
            payload: { body }
        };
    }
    static registerCustomer(body) {
        return {
            type: AuthActionTypes.REGISTER_CUSTOMER_PROG,
            payload: { body }
        };
    }
    static setUser(user) {
        return {
            type: AuthActionTypes.SET_USER,
            payload: { user }
        };
    }
    static logout() {
        return {
            type: AuthActionTypes.LOGOUT
        };
    }
    static clearError() {
        return {
            type: AuthActionTypes.CLEAR_ERROR
        };
    }
    static clearRegisterUserSucc() {
        return {
            type: AuthActionTypes.CLEAR_REGISTER_USER_SUCC
        };
    }


}