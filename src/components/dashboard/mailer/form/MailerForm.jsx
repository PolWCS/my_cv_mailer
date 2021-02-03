import React, { useState } from "react";
import { connect } from "react-redux";

const MailerForm = () => {
  const [formData, setFormData] = useState({
    to: null,
    subject: null,
    text: null,
  });

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form className="mailer_form">
      <label htmlFor="to" className="mailer_form_label">
        Destinataire(s):
        <input
          name="to"
          className="mailer_form_input"
          value={formData.to}
          onChange={handleInput}
        />
      </label>
      <label htmlFor="subject" className="mailer_form_label">
        Objet:
        <input
          name="subject"
          className="mailer_form_input"
          value={formData.subject}
          onChange={handleInput}
        />
      </label>
      <label htmlFor="text" className="mailer_form_label">
        Texte:
        <input
          name="text"
          className="mailer_form_input"
          value={formData.text}
          onChange={handleInput}
        />
      </label>
    </form>
  );
};

export default connect()(MailerForm);
