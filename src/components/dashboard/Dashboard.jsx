import React from "react";
import Mailer from "./mailer/Mailer";
import Recall from "./replies/Recall";

const Dashboard = () => {
  return (
    <>
      <Mailer />
      <Recall />
    </>
  );
};

export default Dashboard;
