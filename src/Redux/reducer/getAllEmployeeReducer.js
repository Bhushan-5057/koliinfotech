import * as types from "../module/actionTypes";

const initialState = {
  allemployee: [],
  loading: false,
};

const getAllEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETALL_EMPLOYEE_START:
      return {
        ...state,
        loading: true,
      };
    case types.GETALL_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: true,
        allemployee: action.payload,
      };
    case types.GETALL_EMPLOYEE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllEmployeeReducer;
