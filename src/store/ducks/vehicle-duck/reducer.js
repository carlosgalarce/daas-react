import { VehicleActionTypes } from './actions-types';
const initialAuthState = {
  isProgressSpecs: false,
  isProgressPrice: false,
  isError: false,
  errorMsg: '',
  errorStatus: 0,
  specs: null,
  price: null

};
export function VehicleReducer(state = initialAuthState, action) {
  switch (action.type) {
    case VehicleActionTypes.GET_VIN_SPECS_PROG:
      return { ...state, isProgressSpecs: true };

    case VehicleActionTypes.GET_VIN_SPECS_SUCC:
      return { ...state, isProgressSpecs: false, specs: action.payload.specs };

    case VehicleActionTypes.GET_VIN_SPECS_FAIL:
      return { ...state, isProgressSpecs: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };


    case VehicleActionTypes.GET_VEHICLE_PRICE_PROG:
      return { ...state, isProgressPrice: true };

    case VehicleActionTypes.GET_VEHICLE_PRICE_SUCC:
      return { ...state, isProgressPrice: false, price: action.payload.price };

    case VehicleActionTypes.GET_VEHICLE_PRICE_FAIL:
      return { ...state, isProgressPrice: false, isError: true, errorMsg: action.payload.message, errorStatus: action.payload.status };


    default:
      return state;
  }
};