import { combineReducers } from "redux";
import { bearerToken, user } from "./authReducers";

export default combineReducers({ bearerToken, user });
