import * as types from "../module/actionTypes";

const initialState = {
  ourBlog: [],
  loading: false,
};

const getAllOurBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETALL_OUR_BLOG_START:
      return {
        ...state,
        loading: true,
      };
    case types.GETALL_OUR_BLOG_SUCCESS:
      return {
        ...state,
        loading: true,
        ourBlog: action.payload,
      };
    case types.GETALL_OUR_BLOG_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllOurBlogReducer;
