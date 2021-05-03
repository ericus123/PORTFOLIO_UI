import { combineReducers } from "redux";
import login from "./auth/loginReducer";
import { resetPassword, changePassword } from "./auth/passwordReducer";
import { signup, confirmEmail } from "./auth/signupReducer";
import { sendConfirmation } from "./auth/emailReducer";
import checkAuth from "./auth/checkAuth";
import {
  posts,
  postsByCat,
  post,
  getPostCats,
  searchPosts,
  postComment,
  postCommentReply,
  postReaction,
  postReactions,
  getComments,
  editComment,
  deleteComment
} from "./blog/posts";
import { sendMessage } from "./contact/index";
import {
  getProfile,
  changeAvatar,
  completeProfile,
  updateProfile,
  deleteAccountToken,
  deleteAccount,
} from "./profile/profile";
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
  resetPassword,
  changePassword,
  sendConfirmation,
  checkAuth,
  postReactions,
  getProfile,
  changeAvatar,
  completeProfile,
  updateProfile,
  deleteAccountToken,
  deleteAccount,
  getComments,
  editComment,
  deleteComment
});

export default allReducers;
