import React from "react";
import { Show, SimpleShowLayout, TextField, UrlField } from "react-admin";

const MotivMailShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <UrlField source="url" />
    </SimpleShowLayout>
  </Show>
);

export default MotivMailShow;
