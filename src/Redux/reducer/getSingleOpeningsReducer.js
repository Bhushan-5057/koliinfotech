import * as types from "../module/actionTypes";

const initialState = {
    Openings: [],
    loading: false,
};

const getSingleOpeningsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_SINGLE_OPENINGS:
            return {
                ...state,
                loading: true,
            };
        case types.GET_SINGLE_OPENINGS_SUCCESS:
            return {
                ...state,
                loading: false,
                Openings: action.payload,
            };
        case types.GET_SINGLE_OPENINGS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default getSingleOpeningsReducer;
