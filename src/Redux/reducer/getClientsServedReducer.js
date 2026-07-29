import * as types from "../module/actionTypes";

const initialState = {
    clients: [],
    loading: false,
    error: null,
};

const getClientsServedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CLIENTS_SERVED_START:
            return {
                ...state,
                loading: true,
            };
        case types.GET_CLIENTS_SERVED_SUCCESS:
            return {
                ...state,
                loading: false,
                clients: action.payload,
            };
        case types.GET_CLIENTS_SERVED_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default getClientsServedReducer;
