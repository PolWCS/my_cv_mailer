import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="email" />
      <TextInput source="password" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
