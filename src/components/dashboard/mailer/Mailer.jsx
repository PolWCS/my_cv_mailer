import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import MailerForm from "./form/MailerForm";

const Mailer = () => {
  return (
    <div>
      <MailerForm />
    </div>
  );
};

export default connect()(Mailer);
