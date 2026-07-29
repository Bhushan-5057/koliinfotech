import * as types from "./actionTypes";

export const getAllOurProductStart = () => ({
  type: types.GETALL_OUR_PRODUCT_START,
});

export const getAllOurProductSuccess = (Product) => ({
  type: types.GETALL_OUR_PRODUCT_SUCCESS,
  payload: Product,
});

export const getAllOurProductError = (error) => ({
  type: types.GETALL_OUR_PRODUCT_ERROR,
  payload: error,
});
