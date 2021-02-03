import { combineReducers } from "redux";
import { bearerToken, user } from "./authReducers";
import { cvList } from "./cvReducers";
import { motivMailList } from "./motivMailReducers";
import { contactBookList } from "./contactBookReducers";

export default combineReducers({
  bearerToken,
  user,
  cvList,
  motivMailList,
  contactBookList,
});
