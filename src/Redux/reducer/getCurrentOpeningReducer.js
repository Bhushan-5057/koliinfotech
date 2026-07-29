import * as types from "../module/actionTypes";

const initialState = {
  CurrentOpenings: [],
  loading: false,
};

const getAllCurrentOpeningsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ALL_CURRENT_OPENINGS_START:
      return {
        ...state,
        loading: true,
      };
    case types.GET_ALL_CURRENT_OPENINGS_SUCCESS:
      return {
        ...state,
        loading: true,
        CurrentOpenings: action.payload,
      };
    case types.GET_ALL_CURRENT_OPENINGS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllCurrentOpeningsReducer;
