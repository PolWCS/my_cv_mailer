import React from "react";
import { connect } from "react-redux";
import MailerForm from "./form/MailerForm";
import SendMailBtn from "./buttons/SendMailBtn";

import "../../../css/dashboard/mailer/Mailer.css";

const Mailer = () => {
  return (
    <div className="mailer_container">
      <div className="mailer_form_container">
        <MailerForm />
        <SendMailBtn />
      </div>
    </div>
  );
};

export default connect()(Mailer);
