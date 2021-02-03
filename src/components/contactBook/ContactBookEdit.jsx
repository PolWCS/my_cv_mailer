import React from "react";
import { Edit } from "react-admin";
import ContactBookForm from "./form/ContactBookForm";

const ContactBookEdit = (props) => (
  <Edit {...props}>
    <ContactBookForm />
  </Edit>
);

export default ContactBookEdit;
