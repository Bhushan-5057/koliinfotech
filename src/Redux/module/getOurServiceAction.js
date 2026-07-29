import * as types from "./actionTypes";

export const getAllOurServicesStart = () => ({
  type: types.GETALL_OUR_SERVICES_START,
});

export const getAllOurServicesSuccess = (services) => ({
  type: types.GETALL_OUR_SERVICES_SUCCESS,
  payload: services,
});

export const getAllOurServicesError = (error) => ({
  type: types.GETALL_OUR_SERVICES_ERROR,
  payload: error,
});
