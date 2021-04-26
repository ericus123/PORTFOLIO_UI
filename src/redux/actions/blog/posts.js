import { types } from "../types";
import http from "../../../utils/axios/axios";

export const getPosts = (page,limit) => async (dispatch) => {
  try {
    const res = await http.get(`/api/posts?page=${page}&limit=${limit}`);
    dispatch({ type: types.GET_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
      dispatch({
        type: types.GET_POSTS_ERROR,
        payload: error.response.data.error || "Error occured",
      });
  }
};

export const getPost = (id) => async (dispatch) => {
  try {
    const res = await http.get(`/api/posts/${id}`);
    dispatch({ type: types.GET_POST_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.GET_POST_ERROR,
      payload: error.response.data.error || "Error occured",
    });
  }
};
export const ReactOnPost = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.POST_REACTION_CLICKED});
    const res = await http.post(`/api/posts/reactions/${id}`);
    dispatch({ type: types.POST_REACTION_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: types.POST_REACTION_ERROR,
      payload: error.response.data.error || "Error occured",
    });
  }
};
export const getPostReactions = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_POST_REACTIONS_ISLOADING});
    const res = await http.get(`/api/posts/reactions/${id}`);
    dispatch({ type: types.GET_POST_REACTIONS_SUCCESS, payload: res.data });
  } catch (error) {
    console.log(error.response);
    dispatch({
      type: types.GET_POST_REACTIONS_ERROR,
      payload: error.response.data.error || "Error occured",
    });
  }
};

export const getPostsByCat = (cat,p) => async (dispatch) => {
  try {
    const res = await http.get(`/api/posts/categories/${cat}?page=${p}`);
    dispatch({ type: types.GET_POSTS_BY_CAT_SUCCESS, payload: res.data });
    console.log(res.data);
  } catch (error) { 
      dispatch({
        type: types.GET_POSTS_BY_CAT_ERROR,
        payload: error.response.data.error || "Error occured",
      });
  }
};

export const getPostCats = () => async (dispatch) => {
  try {
    const res = await http.get("/api/posts/categories");
    dispatch({ type: types.GET_POST_CATS_SUCCESS, payload: res.data });
  } catch (error) {
      dispatch({
        type: types.GET_POST_CATS_ERROR,
        payload: error.response.data.error || "Error occured",
      });
  }
};

export const searchPostsRequest = (q,p,l) => async (dispatch) => {
  try {
    dispatch({ type: types.SEARCH_POSTS_CLICKED,payload: q});
    const res = await http.get(`/api/posts/search?term=${q}&page=${p}&limit=${l}`);
    dispatch({ type: types.SEARCH_POSTS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({
      type: types.SEARCH_POSTS_ERROR,
      payload: error.response.data.error || "Error occured",
    });
  }
};
export const PostComment = (postId, desc) => async (dispatch) => {
  try {
    dispatch({ type: types.POST_COMMENT_CLICKED });
    const res = await http.post(`/api/posts/${postId}/comment`, {
      description: desc,
    });
    dispatch({ type: types.POST_COMMENT_SUCCESS, payload: res.data });
  } catch (error) {
      dispatch({
        type: types.POST_COMMENTS_ERROR,
        payload: error.response.data.error || "Error occured",
      });
  }
};

export const PostCommentReply = (postId, commentId, desc) => async (
  dispatch
) => {
  try {
    dispatch({ type: types.POST_COMMENT_REPLY_CLICKED });
    const res = await http.post(`/api/posts/${postId}/${commentId}/reply`, {
      description: desc,
    });
    dispatch({ type: types.POST_COMMENT_REPLY_SUCCESS, payload: res.data });
  } catch (error) {
      dispatch({
        type: types.POST_COMMENT_REPLY_ERROR,
        payload: error.response.data.error || "Error occured",
      });
  }
};

export const PostReaction = (postId, action) => async (dispatch) => {
  try {
    dispatch({ type: types.POST_REACTION_CLICKED });
    const res = await http.patch(`/api/posts/${postId}/${action}`);
    dispatch({ type: types.POST_REACTION_SUCCESS, payload: res.data });
  } catch (error) {
      dispatch({
        type: types.POST_REACTION_ERROR,
        payload: error.response.data.error || "Error occured",
      });
  }
};
