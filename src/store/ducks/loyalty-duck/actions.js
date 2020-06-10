import { LoyaltyActionTypes } from './actions-types';

export class LoyaltyActions {

    static getRewardPoints() {
        return {
            type: LoyaltyActionTypes.GET_REWARD_POINTS_PROG,
        };
    }
}