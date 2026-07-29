import * as types from "../module/actionTypes";

const initialState = {
    applyData: [],
    loading: false,
    isSuccess: false,
};

const createApplyJobReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_APPLY_JOB_START:
            return {
                ...state,
                loading: true,
                isSuccess:false,
            };
        case types.CREATE_APPLY_JOB_SUCCESS:
            return {
                ...state,
                loading: false,
                isSuccess:true,
                applyData: action.payload,
            };
        case types.CREATE_APPLY_JOB_ERROR:
            return {
                ...state,
                loading: false,
                isSuccess:false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default createApplyJobReducer;
