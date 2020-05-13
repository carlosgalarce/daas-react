import { SettingsActionTypes } from './actions-types';

export class SettingsActions {

    static getSettings() {
        return {
            type: SettingsActionTypes.GET_SETTINGS_PROG,
        };
    }
}