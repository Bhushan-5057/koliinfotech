import {
    GET_LIFE_AT_KOLI_START,
    GET_LIFE_AT_KOLI_SUCCESS,
    GET_LIFE_AT_KOLI_ERROR,
} from "./actionTypes";

export const getLifeAtKoliStart = (data) => ({
    type: GET_LIFE_AT_KOLI_START,
    payload: data,
});

export const getLifeAtKoliSuccess = (data) => ({
    type: GET_LIFE_AT_KOLI_SUCCESS,
    payload: data,
});

export const getLifeAtKoliError = (error) => ({
    type: GET_LIFE_AT_KOLI_ERROR,
    payload: error,
});
