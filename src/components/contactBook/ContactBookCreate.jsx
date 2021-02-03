import React from "react";
import { Create } from "react-admin";
import ContactBookForm from "./form/ContactBookForm";

const ContactBookCreate = (props) => (
  <Create {...props}>
    <ContactBookForm />
  </Create>
);

export default ContactBookCreate;
