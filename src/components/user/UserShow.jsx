import React from "react";
import { Show, SimpleShowLayout, TextField, EmailField } from "react-admin";

const UserShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <EmailField source="email" />
      <TextField source="password" />
      <TextField source="firstname" />
      <TextField source="lastname" />
    </SimpleShowLayout>
  </Show>
);

export default UserShow;
