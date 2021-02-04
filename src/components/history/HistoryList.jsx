import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";

const HistoryList = (props) => (
  <List {...props}>
    <Datagrid rowClick="show">
      <ReferenceField source="contact_book_id" reference="contact_book">
        <TextField source="firm" />
      </ReferenceField>
      <DateField source="date" />
      <TextField source="reply" />
    </Datagrid>
  </List>
);

export default HistoryList;
