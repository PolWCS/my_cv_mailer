import React from "react";
import { Show, SimpleShowLayout, TextField, EmailField } from "react-admin";

const ContactBookShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <EmailField source="email" />
      <TextField source="lastname" />
      <TextField source="firstname" />
      <TextField source="firm" />
    </SimpleShowLayout>
  </Show>
);

export default ContactBookShow;
