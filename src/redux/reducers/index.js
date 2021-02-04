import { combineReducers } from "redux";
import { bearerToken, user } from "./authReducers";
import { cvList, newCv, currentCv } from "./cvReducers";
import { motivMailList, newMMail, currentMMail } from "./motivMailReducers";
import { contactBookList, currentContact } from "./contactBookReducers";
import { emailFormData } from "./emailReducers";
import { currentDoc } from "./currentDoc";
import { alertMail, alertGlobal } from "./alertReducers";
import { lastMailSentData, recallList } from "./historyReducers";

export default combineReducers({
  bearerToken,
  user,
  cvList,
  motivMailList,
  contactBookList,
  currentContact,
  emailFormData,
  newMMail,
  currentMMail,
  newCv,
  currentCv,
  currentDoc,
  alertMail,
  alertGlobal,
  lastMailSentData,
  recallList,
});
