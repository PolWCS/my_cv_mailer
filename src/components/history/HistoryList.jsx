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
        <TextField source="email" />
      </ReferenceField>
      <DateField source="date" />
      <ReferenceField source="cv_id" reference="curriculum_vitae">
        <TextField source="title" />
      </ReferenceField>
      <ReferenceField source="mm_id" reference="motivation_mails">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="reply" />
    </Datagrid>
  </List>
);

export default HistoryList;
