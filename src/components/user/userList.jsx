import React from "react";
import { List, Datagrid, TextField, EmailField, EditButton } from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <EmailField source="email" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <EditButton />
    </Datagrid>
  </List>
);
