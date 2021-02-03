import React, { useEffect } from "react";
import Home from "./components/Home";
import { useGetIdentity } from "react-admin";
import { connect } from "react-redux";

import { getUserAction, setTokenAction } from "./redux/actions/index";
import { getCvListAction } from "./redux/actions/cvActions";
import { getMotivMailListListAction } from "./redux/actions/motivMailActions";
import { getContactBookListAction } from "./redux/actions/contactBookActions";

import "./App.css";

const App = ({
  getUser,
  setToken,
  user,
  getCvList,
  getMotivMailListList,
  getContactBookList,
}) => {
  const { identity } = useGetIdentity();
  const auth = sessionStorage.getItem("auth");

  useEffect(() => {
    if (auth)
      (async () => {
        await getUser();
      })();
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

  return <Home />;
};

const mapStateToProps = ({ custom: { user } }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  getUser: getUserAction(dispatch),
  setToken: setTokenAction(dispatch),
  getCvList: getCvListAction(dispatch),
  getMotivMailListList: getMotivMailListListAction(dispatch),
  getContactBookList: getContactBookListAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
