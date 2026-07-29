import * as types from "../module/actionTypes";

const initialState = {
  ourClients: [],
  singleClient:[],
  loading: false,
};

const getAllOurClientReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETALL_OUR_CLIENT_START:
    case types.GET_SINGLE_CLIENT_START:
      return {
        ...state,
        loading: true,
      };
    case types.GETALL_OUR_CLIENT_SUCCESS:
      return {
        ...state,
        loading: true,
        ourClients: action.payload,
      };
      case types.GET_SINGLE_CLIENT_SUCCESS:
        return {
          ...state,
          loading: true,
          singleClient: action.payload,
        };
      case types.GETALL_OUR_CLIENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case types.GET_SINGLE_CLIENT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllOurClientReducer;
