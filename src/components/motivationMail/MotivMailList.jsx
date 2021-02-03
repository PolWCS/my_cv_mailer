import React from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";

const MotivMailList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="title" />
      <TextField source="url" />
      <EditButton />
    </Datagrid>
  </List>
);

export default MotivMailList;
