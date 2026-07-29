import * as types from "./actionTypes";

export const getClientsServedStart = () => ({
    type: types.GET_CLIENTS_SERVED_START,
});

export const getClientsServedSuccess = (clients) => ({
    type: types.GET_CLIENTS_SERVED_SUCCESS,
    payload: clients,
});

export const getClientsServedError = (error) => ({
    type: types.GET_CLIENTS_SERVED_ERROR,
    payload: error,
});
