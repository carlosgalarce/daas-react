import { SettingsActionTypes } from './actions-types';

export class SettingsActions {

    static getSettings() {
        return {
            type: SettingsActionTypes.GET_SETTINGS_PROG,
        };
    }
    static getCustomerInfo() {
        return {
            type: SettingsActionTypes.GET_CUSTOMER_INFO_PROG,
        };
    }
}