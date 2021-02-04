import React, { useEffect } from "react";
import Home from "./components/Home";
import { useGetIdentity } from "react-admin";
import { connect } from "react-redux";

import { getUserAction, setTokenAction } from "./redux/actions/index";
import { getCvListAction, setNewCvAction } from "./redux/actions/cvActions";
import {
  getMotivMailListListAction,
  setNewMotivationMailAction,
} from "./redux/actions/motivMailActions";
import {
  getContactBookListAction,
  setCurrentContactAction,
} from "./redux/actions/contactBookActions";
import { setEmailFormDataAction } from "./redux/actions/emailActions";
import { setCurrentDocAction } from "./redux/actions/docActions";

import "./App.css";

const App = ({
  getUser,
  setToken,
  user,
  getCvList,
  getMotivMailListList,
  getContactBookList,
  location,
  setCurrentContact,
  setCurrentDoc,
  setEmailFormData,
  setNewMotivationMail,
  setNewCv,
}) => {
  const { identity } = useGetIdentity();
  const auth = sessionStorage.getItem("auth");

  useEffect(() => {
    if (auth) getUser();
  }, [auth, identity]);

  useEffect(() => {
    if (user)
      (async () => {
        const auth2 = JSON.parse(sessionStorage.getItem("auth"));
        await setToken(auth2.token);
        await getCvList();
        await getMotivMailListList();
        await getContactBookList();
      })();
  }, [user]);

  useEffect(() => {
    setNewMotivationMail();
    setCurrentContact();
    setEmailFormData();
    setCurrentDoc();
    setNewCv();
  }, [location]);

  return <Home />;
};

const mapStateToProps = ({ router: { location }, custom: { user } }) => ({
  user,
  location,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: getUserAction(dispatch),
  setToken: setTokenAction(dispatch),
  getCvList: getCvListAction(dispatch),
  getMotivMailListList: getMotivMailListListAction(dispatch),
  getContactBookList: getContactBookListAction(dispatch),
  setNewMotivationMail: setNewMotivationMailAction(dispatch),
  setCurrentContact: setCurrentContactAction(dispatch),
  setEmailFormData: setEmailFormDataAction(dispatch),
  setCurrentDoc: setCurrentDocAction(dispatch),
  setNewCv: setNewCvAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
