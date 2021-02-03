import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

const HistoryEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DateInput source="date" />
      <TextInput source="reply" />
      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="contact_book_id" reference="contact_books">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="cv_id" reference="curriculum_vitae">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ReferenceInput source="mm_id" reference="motivation_mails">
        <SelectInput optionText="id" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export default HistoryEdit
