import React from "react";
import { Create } from "react-admin";
import CvForm from "./form/CvForm";

const CvCreate = (props) => (
  <Create {...props}>
    <CvForm />
  </Create>
);

export default CvCreate;
