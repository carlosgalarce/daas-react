import { of } from 'rxjs';
import { ofType, } from 'redux-observable';
import { switchMap, pluck, catchError, flatMap } from 'rxjs/operators';
import { VehicleActionTypes } from './actions-types';

export class VehicleEpics {
    static getVinSpecs(action$, state$, { ajaxGet, CORE_API_URL, HEADERS, JSON_TOKEN }) {
        return action$.pipe(ofType(VehicleActionTypes.GET_VIN_SPECS_PROG), switchMap(() => {
            return ajaxGet(`${CORE_API_URL}/VINSupport/GetVINSpecs?vin=${state$?.value?.settings?.customerInfo?.Vehicles?.VIN}&JsonToken=${JSON_TOKEN}`, HEADERS).pipe(pluck('response'), flatMap(obj => {
                return of(
                    {
                        type: VehicleActionTypes.GET_VIN_SPECS_SUCC,
                        payload: { specs: obj?.Data }
                    },

                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: VehicleActionTypes.GET_VIN_SPECS_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }

    static getVehiclePrice(action$, state$, { ajaxGet, CORE_API_URL, HEADERS, JSON_TOKEN }) {
        return action$.pipe(ofType(VehicleActionTypes.GET_VEHICLE_PRICE_PROG), switchMap(() => {
            return ajaxGet(`${CORE_API_URL}/GetCurrentVehiclePrice/?VINNUMBER=${state$?.value?.settings?.customerInfo?.Vehicles?.VIN}&JsonToken=${JSON_TOKEN}`, HEADERS).pipe(pluck('response'), flatMap(obj => {
                return of(
                    {
                        type: VehicleActionTypes.GET_VEHICLE_PRICE_SUCC,
                        payload: { price: obj?.Data }
                    },
                );
            })
                , catchError((err) => {
                    window.scrollTo(0, 0);
                    return of({ type: VehicleActionTypes.GET_VEHICLE_PRICE_FAIL, payload: { err, message: err?.response?.message, status: err?.status } });
                }));

        }));
    }




}