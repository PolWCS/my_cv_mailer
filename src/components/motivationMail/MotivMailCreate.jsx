import React from "react";
import { Create } from "react-admin";
import MotivMailForm from "./form/MotivMailForm";

const MotivMailCreate = (props) => (
  <Create {...props}>
    <MotivMailForm />
  </Create>
);

export default MotivMailCreate;
