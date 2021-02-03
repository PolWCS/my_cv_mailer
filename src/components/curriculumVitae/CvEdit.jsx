import React from "react";
import { Edit } from "react-admin";
import CvForm from "./form/CvForm";

const CvEdit = (props) => (
  <Edit {...props}>
    <CvForm />
  </Edit>
);

export default CvEdit;
