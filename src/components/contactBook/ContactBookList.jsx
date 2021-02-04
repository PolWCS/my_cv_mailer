import React from "react";
import { List, Datagrid, TextField, EmailField, EditButton } from "react-admin";

const ContactBookList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <EmailField source="email" />
      <TextField source="firm" />
      <EditButton />
    </Datagrid>
  </List>
);

export default ContactBookList;
