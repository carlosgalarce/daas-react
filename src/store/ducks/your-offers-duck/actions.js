import { YourOffersActionTypes } from './actions-types';

export class YourOffersActions {

    static getCoupons() {
        return {
            type: YourOffersActionTypes.GET_COUPONS_PROG,
        };
    }
}