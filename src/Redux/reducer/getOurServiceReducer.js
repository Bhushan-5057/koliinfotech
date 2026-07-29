import * as types from "../module/actionTypes";

const initialState = {
  ourServices: [],
  loading: false,
};

const getAllOurServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETALL_OUR_SERVICES_START:
      return {
        ...state,
        loading: true,
      };
    case types.GETALL_OUR_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        ourServices: action.payload,
      };
    case types.GETALL_OUR_SERVICES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllOurServiceReducer;
