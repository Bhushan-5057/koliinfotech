import * as types from "../module/actionTypes";

const initialState = {
    workProcess: [],
    loading: false,
    error: null,
};

const getWorkProcessReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_WORK_PROCESS_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_WORK_PROCESS_SUCCESS:
            return {
                ...state,
                loading: false,
                workProcess: action.payload,
            };
        case types.GET_WORK_PROCESS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default getWorkProcessReducer;
