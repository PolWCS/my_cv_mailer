import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Admin, Resource, fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { createHashHistory } from "history";

import { createMuiTheme } from "@material-ui/core/styles";
import { cyan, deepPurple } from "@material-ui/core/colors";

import authProvider from "./login/authProvider";

import Dashboard from "./dashboard/Dashboard";

import UserList from "./user/UserList";
import CvList from "./curriculumVitae/CvList";
import MotivMailList from "./motivationMail/MotivMailList";
import HistoryList from "./history/HistoryList";
import ContactBookList from "./contactBook/ContactBookList";

import UserShow from "./user/UserShow";
import CvShow from "./curriculumVitae/CvShow";
import MotivMailShow from "./motivationMail/MotivMailShow";
import HistoryShow from "./history/HistoryShow";
import ContactBookShow from "./contactBook/ContactBookShow";

import UserEdit from "./user/UserEdit";
import CvEdit from "./curriculumVitae/CvEdit";
import MotivMailEdit from "./motivationMail/MotivMailEdit";
import ContactBookEdit from "./contactBook/ContactBookEdit";

import CvCreate from "./curriculumVitae/CvCreate";
import MotivMailCreate from "./motivationMail/MotivMailCreate";
import ContactBookCreate from "./contactBook/ContactBookCreate";

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

const dataProvider = jsonServerProvider(process.env.REACT_APP_HOST, httpClient);
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
        dashboard={Dashboard}
        dataProvider={dataProvider}
        authProvider={authProvider}
        history={history}
      >
        <Resource
          name="users"
          list={UserList}
          show={UserShow}
          edit={UserEdit}
        />
        <Resource
          name="curriculum_vitae"
          list={CvList}
          show={CvShow}
          edit={CvEdit}
          create={CvCreate}
        />
        <Resource
          name="motivation_mails"
          list={MotivMailList}
          show={MotivMailShow}
          edit={MotivMailEdit}
          create={MotivMailCreate}
        />
        <Resource
          name="contact_book"
          list={ContactBookList}
          show={ContactBookShow}
          edit={ContactBookEdit}
          create={ContactBookCreate}
        />
        <Resource name="history" list={HistoryList} show={HistoryShow} />
      </Admin>
    </>
  );
};

export default connect()(Home);
