import React from "react";
import { Show, SimpleShowLayout, TextField, UrlField } from "react-admin";

const CvShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="title" />
      <UrlField source="url" />
    </SimpleShowLayout>
  </Show>
);

export default CvShow;
