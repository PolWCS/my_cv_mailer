import React from "react";
import {
  Show,
  SimpleShowLayout,
  TextField,
  ReferenceField,
  EmailField,
  UrlField,
  DateField,
} from "react-admin";

const HistoryShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <ReferenceField source="contact_book_id" reference="contact_book">
        <EmailField source="email" />
      </ReferenceField>
      <ReferenceField source="contact_book_id" reference="contact_book">
        <EmailField source="firm" />
      </ReferenceField>
      <DateField source="date" />
      <ReferenceField source="cv_id" reference="curriculum_vitae">
        <UrlField source="url" />
      </ReferenceField>
      <ReferenceField source="mm_id" reference="motivation_mails">
        <UrlField source="url" />
      </ReferenceField>
      <TextField source="reply" />
    </SimpleShowLayout>
  </Show>
);

export default HistoryShow;
