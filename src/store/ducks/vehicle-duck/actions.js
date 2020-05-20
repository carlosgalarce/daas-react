import { VehicleActionTypes } from './actions-types';

export class VehicleActions {

    static getVinSpecs() {
        return {
            type: VehicleActionTypes.GET_VIN_SPECS_PROG,
        };
    }
    static getVehiclePrice() {
        return {
            type: VehicleActionTypes.GET_VEHICLE_PRICE_PROG,
        };
    }
}