import * as types from "../module/actionTypes";

const initialState = {
  ourProduct: [],
  loading: false,
};

const getAllOurProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETALL_OUR_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case types.GETALL_OUR_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: true,
        ourProduct: action.payload,
      };
    case types.GETALL_OUR_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllOurProductReducer;
