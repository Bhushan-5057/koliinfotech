import {
    GET_LIFE_AT_KOLI_START,
    GET_LIFE_AT_KOLI_SUCCESS,
    GET_LIFE_AT_KOLI_ERROR,
} from "../module/actionTypes";

const initialState = {
    lifeAtKoli: [],
    loading: false,
    error: null,
};

const getLifeAtKoliReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LIFE_AT_KOLI_START:
            return {
                ...state,
                loading: true,
            };
        case GET_LIFE_AT_KOLI_SUCCESS:
            return {
                ...state,
                loading: false,
                lifeAtKoli: action.payload,
            };
        case GET_LIFE_AT_KOLI_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default getLifeAtKoliReducer;
