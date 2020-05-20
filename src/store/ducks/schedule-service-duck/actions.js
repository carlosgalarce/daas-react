import { ScheduleServiceActionTypes } from './actions-types';

export class ScheduleServiceActions {

    static getServices() {
        return {
            type: ScheduleServiceActionTypes.GET_SERVICES_PROG,
        };
    }
    static getRecommendedServices() {
        return {
            type: ScheduleServiceActionTypes.GET_RECOMMENDED_SERVICES_PROG,
        };
    }
    static getProviders() {
        return {
            type: ScheduleServiceActionTypes.GET_PROVIDERS_PROG,
        };
    }
    static getAvailabilities(providerId, serviceId, date) {
        return {
            type: ScheduleServiceActionTypes.GET_AVAILABILITIES_PROG,
            payload: { providerId, serviceId, date }
        };
    }
    static bookAppointment(body) {
        return {
            type: ScheduleServiceActionTypes.BOOK_APPOINTMENT_PROG,
            payload: { body }
        };
    }
    static clearAppointment() {
        return {
            type: ScheduleServiceActionTypes.CLEAR_APPOINTMENT
        };
    }
}