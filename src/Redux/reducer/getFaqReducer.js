import * as types from "../module/actionTypes";

const initialState = {
    faq: [],
    loading: false,
    error: null,
};

const getFaqReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_FAQ_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_FAQ_SUCCESS:
            return {
                ...state,
                loading: false,
                faq: action.payload,
            };
        case types.GET_FAQ_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default getFaqReducer;
