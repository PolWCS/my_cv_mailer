import React from "react";
import { List, Datagrid, TextField, EditButton, UrlField } from "react-admin";

const CvList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <TextField source="title" />
      {/* <UrlField source="url" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

export default CvList;
