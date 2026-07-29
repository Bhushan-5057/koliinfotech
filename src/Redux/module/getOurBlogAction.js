import * as types from "./actionTypes";

export const getAllOurBlogStart = () => ({
  type: types.GETALL_OUR_BLOG_START,
});

export const getAllOurBlogSuccess = (Blog) => ({
  type: types.GETALL_OUR_BLOG_SUCCESS,
  payload: Blog,
});

export const getAllOurBlogError = (error) => ({
  type: types.GETALL_OUR_BLOG_ERROR,
  payload: error,
});

