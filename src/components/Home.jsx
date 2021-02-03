import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Admin,
  Resource,
  ListGuesser,
  fetchUtils,
  ShowGuesser,
  EditGuesser,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { createHashHistory } from "history";

import { createMuiTheme } from "@material-ui/core/styles";
import { cyan, deepPurple } from "@material-ui/core/colors";

import authProvider from "./login/authProvider";

// import MyLayout from "./MyLayout";
// import superAdminRoutes from "../routes/superAdminRoutes";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: cyan,
    secondary: deepPurple,
  },
});
const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(sessionStorage.getItem("auth"));
  options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(process.env.REACT_APP_HOST);
const history = createHashHistory();

const Home = () => {
  // const [routes, setRoutes] = useState([]);

  // useEffect(() => {
  //   if (user && user.role === "super_admin") {
  //     setRoutes(superAdminRoutes);
  //   }
  // }, [user]);

  return (
    <>
      <Admin
        // layout={MyLayout}
        // theme={theme}
        dataProvider={dataProvider}
        // authProvider={authProvider}
        history={history}
      >
        <Resource
          name="users"
          list={ListGuesser}
          show={ShowGuesser}
          edit={EditGuesser}
        />
        <Resource
          name="curriculum_vitae"
          list={ListGuesser}
          show={ShowGuesser}
          edit={EditGuesser}
        />
        <Resource
          name="motivation_mails"
          list={ListGuesser}
          show={ShowGuesser}
          edit={EditGuesser}
        />
        <Resource
          name="contact_book"
          list={ListGuesser}
          show={ShowGuesser}
          edit={EditGuesser}
        />
        <Resource
          name="history"
          list={ListGuesser}
          show={ShowGuesser}
          edit={EditGuesser}
        />
      </Admin>
    </>
  );
};

export default connect()(Home);
