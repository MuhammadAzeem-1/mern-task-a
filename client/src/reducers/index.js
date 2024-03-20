import { combineReducers } from "redux";
import post from "./post.js";
import auth from "./auth.js";

export default combineReducers({
  auth,
  post,
});
