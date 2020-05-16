import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { ScheduleServiceActionTypes } from './actions-types';

export class ScheduleServiceEpics {
    static getServices(action$, state$, { ajaxGet, SCHEDULE_API_URL, HEADERS }) {
        return action$.pipe(ofType(ScheduleServiceActionTypes.GET_SERVICES_PROG), switchMap(() => {
            return ajaxGet(`${SCHEDULE_API_URL}/services/`, HEADERS).pipe(pluck('response'), flatMap(array => {

                return of(
                    {
                        type: ScheduleServiceActionTypes.GET_SERVICES_SUCC,
                        payload: { services: array }
                    },

                );
            })
                , catchError((err) => {
                    return of({ type: ScheduleServiceActionTypes.GET_SERVICES_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }

    static getProviders(action$, state$, { ajaxGet, SCHEDULE_API_URL, HEADERS }) {
        return action$.pipe(ofType(ScheduleServiceActionTypes.GET_PROVIDERS_PROG), switchMap(() => {
            return ajaxGet(`${SCHEDULE_API_URL}/providers/`, HEADERS).pipe(pluck('response'), flatMap(array => {

                return of(
                    {
                        type: ScheduleServiceActionTypes.GET_PROVIDERS_SUCC,
                        payload: { providers: array }
                    },

                );
            })
                , catchError((err) => {
                    return of({ type: ScheduleServiceActionTypes.GET_PROVIDERS_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }

    static getAvailabilities(action$, state$, { ajaxGet, SCHEDULE_API_URL, HEADERS }) {
        return action$.pipe(ofType(ScheduleServiceActionTypes.GET_AVAILABILITIES_PROG), switchMap(({ payload }) => {
            return ajaxGet(`${SCHEDULE_API_URL}/availabilities?providerId=${payload.providerId}&serviceId=${payload.serviceId}&date=${payload.date}`, HEADERS).pipe(pluck('response'), flatMap(array => {

                return of(
                    {
                        type: ScheduleServiceActionTypes.GET_AVAILABILITIES_SUCC,
                        payload: { availabilties: array }
                    },

                );
            })
                , catchError((err) => {
                    return of({ type: ScheduleServiceActionTypes.GET_AVAILABILITIES_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }

    static bookAppointment(action$, state$, { ajaxPost, SCHEDULE_API_URL, HEADERS }) {
        return action$.pipe(ofType(ScheduleServiceActionTypes.BOOK_APPOINTMENT_PROG), switchMap(({ payload }) => {
            return ajaxPost(`${SCHEDULE_API_URL}/appointments`, payload.body, HEADERS).pipe(pluck('response'), flatMap(obj => {

                return of(
                    {
                        type: ScheduleServiceActionTypes.BOOK_APPOINTMENT_SUCC,
                        payload: { appointment: obj }
                    },

                );
            })
                , catchError((err) => {
                    return of({ type: ScheduleServiceActionTypes.BOOK_APPOINTMENT_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }




}