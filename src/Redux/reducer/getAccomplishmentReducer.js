import * as types from "../module/actionTypes";

const initialState = {
    accomplishments: [],
    loading: false,
    error: null,
};

const getAccomplishmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ACCOMPLISHMENTS_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_ACCOMPLISHMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                accomplishments: action.payload,
            };
        case types.GET_ACCOMPLISHMENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default getAccomplishmentReducer;
