import { FinanceActionTypes } from './actions-types';

export class FinanceActions {

    static getTransaction() {
        return {
            type: FinanceActionTypes.GET_TRANSACTION_PROG,
        };
    }
}