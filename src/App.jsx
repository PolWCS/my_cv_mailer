import React, { useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import { connect } from "react-redux";

import { getUserAction, setTokenAction } from "./redux/actions/index";
import { getCvListAction } from "./redux/actions/cvActions";
import { getMotivMailListListAction } from "./redux/actions/motivMailActions";
import { getContactBookListAction } from "./redux/actions/contactBookActions";

function App({
  getUser,
  setToken,
  user,
  getCvList,
  getMotivMailListList,
  getContactBookList,
}) {
  const auth = sessionStorage.getItem("auth");

  useEffect(() => {
    if (auth)
      (async () => {
        await getUser();
        const auth2 = JSON.parse(sessionStorage.getItem("auth"));
        await setToken(auth2.token);
      })();
  }, [auth]);

  useEffect(() => {
    if (user)
      (async () => {
        await getCvList();
        await getMotivMailListList();
        await getContactBookList();
      })();
  }, [user]);

  return <Home />;
}

const mapStateToProps = ({ custom: { user } }) => ({ user });

const mapDispatchToProps = (dispatch) => ({
  getUser: getUserAction(dispatch),
  setToken: setTokenAction(dispatch),
  getCvList: getCvListAction(dispatch),
  getMotivMailListList: getMotivMailListListAction(dispatch),
  getContactBookList: getContactBookListAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
