import React, { useState } from "react";
import { connect } from "react-redux";

import { setEmailFormDataAction } from "../../../../redux/actions/emailActions";

import "../../../../css/dashboard/mailer/form/MailerForm.css";

const MailerForm = ({ emailFormData, setEmailFormData }) => {
  const handleInput = (event) => {
    setEmailFormData({
      ...emailFormData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="mailer_form">
      <label htmlFor="to" className="mailer_form_label">
        Destinataire(s):
        <input
          name="to"
          className="mailer_form_input"
          value={emailFormData.to}
          onChange={handleInput}
        />
      </label>
      <label htmlFor="subject" className="mailer_form_label">
        Objet:
        <input
          name="subject"
          className="mailer_form_input"
          value={emailFormData.subject}
          onChange={handleInput}
        />
      </label>
      <label htmlFor="message" className="mailer_form_label">
        Message:
        <input
          name="message"
          className="mailer_form_input"
          value={emailFormData.message}
          onChange={handleInput}
        />
      </label>
    </form>
  );
};

const mapStateToProps = ({ custom: { emailFormData } }) => ({ emailFormData });

const mapDispatchToProps = (dispatch) => ({
  setEmailFormData: setEmailFormDataAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailerForm);
