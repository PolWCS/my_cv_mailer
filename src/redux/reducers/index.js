import { combineReducers } from "redux";
import { bearerToken, user } from "./authReducers";
import { cvList } from "./cvReducers";
import { motivMailList } from "./motivMailReducers";
import { contactBookList } from "./contactBookReducers";
import { emailFormData } from "./emailReducers";

export default combineReducers({
  bearerToken,
  user,
  cvList,
  motivMailList,
  contactBookList,
  emailFormData,
});
