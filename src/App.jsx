import React, { useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import { connect } from "react-redux";

import { getUserAction, setTokenAction } from "./redux/actions/index";

function App({ getUser, setToken }) {
  const auth = JSON.parse(sessionStorage.getItem("auth"));

  useEffect(() => {
    if (auth)
      (async () => {
        await getUser();
        await setToken(auth.token);
      })();
  }, [auth]);

  return <Home />;
}

const mapDispatchToProps = (dispatch) => ({
  getUser: getUserAction(dispatch),
  setToken: setTokenAction(dispatch),
});

export default connect(null, mapDispatchToProps)(App);
