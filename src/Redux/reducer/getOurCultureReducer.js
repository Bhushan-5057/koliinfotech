import * as types from "../module/actionTypes";

const initialState = {
    ourCulture: null,
    loading: false,
    error: null,
};

const getOurCultureReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GETALL_OUR_CULTURE_START:
            return {
                ...state,
                loading: true,
            };
        case types.GETALL_OUR_CULTURE_SUCCESS:
            return {
                ...state,
                loading: false,
                ourCulture: action.payload,
            };
        case types.GETALL_OUR_CULTURE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default getOurCultureReducer;
