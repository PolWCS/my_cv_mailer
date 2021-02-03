import React from "react";
import { SimpleForm, TextInput } from "react-admin";

const ContactBookForm = (props) => (
  <SimpleForm {...props}>
    <TextInput source="firm" />
    <TextInput source="email" />
    <TextInput source="lastname" />
    <TextInput source="firstname" />
  </SimpleForm>
);

export default ContactBookForm;
