import { combineReducers } from "redux";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  streams: streamReducer,
  auth: authReducer,
});
