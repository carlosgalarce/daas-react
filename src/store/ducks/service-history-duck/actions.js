import { ServiceHistoryActionTypes } from './actions-types';

export class ServiceHistoryActions {

    static getServiceHistory() {
        return {
            type: ServiceHistoryActionTypes.GET_SERVICE_HISTORY_PROG,
        };
    }
}