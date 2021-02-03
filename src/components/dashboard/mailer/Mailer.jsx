import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import MailerForm from "./form/MailerForm";
import SendMailBtn from "./buttons/SendMailBtn";

const Mailer = () => {
  return (
    <div>
      <MailerForm />
      <SendMailBtn />
    </div>
  );
};

export default connect()(Mailer);
