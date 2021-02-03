import { combineReducers } from "redux";
import { bearerToken, user } from "./authReducers";
import { cvList, newCv } from "./cvReducers";
import { motivMailList, newMMail } from "./motivMailReducers";
import { contactBookList } from "./contactBookReducers";
import { emailFormData } from "./emailReducers";
import { currentDoc } from "./currentDoc";
import { alertMail, alertGlobal } from "./alertReducers";

export default combineReducers({
  bearerToken,
  user,
  cvList,
  motivMailList,
  contactBookList,
  emailFormData,
  newMMail,
  newCv,
  currentDoc,
  alertMail,
  alertGlobal,
});
