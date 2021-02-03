import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { setEmailFormDataAction } from "../../../../redux/actions/emailActions";

import "../../../../css/dashboard/mailer/form/MailerForm.css";

const MailerForm = ({
  emailFormData,
  setEmailFormData,
  motivMailList,
  cvList,
  user,
}) => {
  const [select, setSelect] = useState({
    cvUrl: null,
    mmUrl: null,
  });
  const handleInput = (event) => {
    setEmailFormData({
      ...emailFormData,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    setEmailFormData({
      ...emailFormData,
      html: `<p>CV ${user && user.fullName} ${select.cvUrl}</p><p>Motivation ${
        user && user.fullName
      } ${select.mmUrl}</p>`,
      attachments: [
        { filename: `CV ${user && user.fullName}`, path: select.cvUrl },
        { filename: `Motivation ${user && user.fullName}`, path: select.mmUrl },
      ],
    });
  }, [select]);

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
      <label htmlFor="type" className="mailer_form_label">
        <select
          name="type"
          className="mailer_form_input"
          value={select.cvUrl}
          onChange={(event) =>
            setSelect({ ...select, cvUrl: event.target.value })
          }
        >
          <option value="">--Sélectionnez un CV--</option>
          {cvList.length > 0 &&
            cvList.map((cv) => <option value={cv.url}>{cv.title}</option>)}
        </select>
      </label>
      <label htmlFor="type" className="mailer_form_label">
        <select
          name="type"
          className="mailer_form_input"
          value={select.mmUrl}
          onChange={(event) =>
            setSelect({ ...select, mmUrl: event.target.value })
          }
        >
          <option value="">--Sélectionnez une lettre de motivation--</option>
          {motivMailList.length > 0 &&
            motivMailList.map((mail) => (
              <option value={mail.url}>{mail.title}</option>
            ))}
        </select>
      </label>
    </form>
  );
};

const mapStateToProps = ({
  custom: { emailFormData, motivMailList, cvList, user },
}) => ({
  emailFormData,
  motivMailList,
  cvList,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  setEmailFormData: setEmailFormDataAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailerForm);
