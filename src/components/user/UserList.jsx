import React from "react";
import { List, Datagrid, TextField, EmailField, EditButton } from "react-admin";

const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <EmailField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

export default UserList;
