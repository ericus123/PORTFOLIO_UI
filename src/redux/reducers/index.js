import { combineReducers } from "redux";
import login from "./auth/loginReducer";
import { signup, confirmEmail } from "./auth/signupReducer";
import {
  posts,
  postsByCat,
  post,
  getPostCats,
  searchPosts,
  postComment,
  postCommentReply,
  postReaction,
} from "./blog/posts";
import { sendMessage } from "./contact/index";
import { subscribeNewsletter } from "./subscriptions/newsLetter";
// function that contains all reducer objects.
const allReducers = combineReducers({
  signup,
  login,
  posts,
  post,
  sendMessage,
  postsByCat,
  getPostCats,
  searchPosts,
  postComment,
  postCommentReply,
  postReaction,
  confirmEmail,
  subscribeNewsletter,
});

export default allReducers;
