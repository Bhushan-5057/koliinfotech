import * as types from "./actionTypes";

export const getAllEmployeeStart = () => ({
  type: types.GETALL_EMPLOYEE_START,
});

export const getAllEmployeeSuccess = (allemployee) => ({
  type: types.GETALL_EMPLOYEE_SUCCESS,
  payload: allemployee,
});

export const getAllEmployeeError = (error) => ({
  type: types.GETALL_EMPLOYEE_ERROR,
  payload: error,
});
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             