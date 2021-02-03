import React from "react";
import { SimpleForm, TextInput } from "react-admin";

const MotivMailForm = (props) => (
  <SimpleForm {...props}>
    <TextInput source="title" />
    <TextInput source="url" />
  </SimpleForm>
);

export default MotivMailForm;
