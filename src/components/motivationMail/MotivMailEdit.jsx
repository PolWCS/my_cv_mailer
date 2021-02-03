import React from "react";
import { Edit } from "react-admin";
import MotivMailForm from "./form/MotivMailForm";

const MotivMailEdit = (props) => (
  <Edit {...props}>
    <MotivMailForm />
  </Edit>
);

export default MotivMailEdit;
