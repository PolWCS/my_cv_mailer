import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { setEmailFormDataAction } from "../../../../redux/actions/emailActions";
import { getCvIdAction } from "../../../../redux/actions/cvActions";
import { getMMIdAction } from "../../../../redux/actions/motivMailActions";
import { getCurrentContactIdAction } from "../../../../redux/actions/contactBookActions";

import "../../../../css/dashboard/mailer/form/MailerForm.css";

const MailerForm = ({
  emailFormData,
  setEmailFormData,
  motivMailList,
  cvList,
  user,
  contactBookList,
  getMMId,
  getCvId,
  getCurrentContactId,
}) => {
  const [select, setSelect] = useState({
    cvUrl: null,
    mmUrl: null,
    message: "",
  });
  const handleInput = (event) => {
    setEmailFormData({
      ...emailFormData,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "message") {
      setSelect({ ...select, message: event.target.value });
    }
  };

  useEffect(() => {
    if (emailFormData.to) getCurrentContactId(emailFormData.to);
  }, [emailFormData.to]);

  useEffect(() => {
    setEmailFormData({
      ...emailFormData,
      html: `<div><p>${select.message}</p><p>CV ${user && user.fullName} ${
        select.cvUrl
      }</p><p>Motivation ${user && user.fullName} ${select.mmUrl}</p></div>`,
      attachments: [
        { filename: `CV ${user && user.fullName}`, path: select.cvUrl },
        { filename: `Motivation ${user && user.fullName}`, path: select.mmUrl },
      ],
    });
    if (select.cvUrl) {
      getCvId(select.cvUrl);
    }
    if (select.mmUrl) {
      getMMId(select.mmUrl);
    }
  }, [select]);

  return (
    <form className="mailer_form">
      <div className="mailer_form_select_container">
        <label htmlFor="to" className="mailer_form_label">
          <select
            name="to"
            className="mailer_form_input"
            value={emailFormData.to}
            onChange={handleInput}
          >
            <option value="">--Sélectionnez un contact--</option>
            {contactBookList.length > 0 &&
              contactBookList.map((contact) => (
                <option value={contact.email}>
                  {contact.firm} {contact.email} {contact.lastname}{" "}
                  {contact.firstname}{" "}
                </option>
              ))}
          </select>
        </label>
      </div>
      <div className="mailer_form_mail_content_container">
        <label htmlFor="subject" className="mailer_form_label">
          <input
            name="subject"
            className="mailer_form_input"
            value={emailFormData.subject}
            placeholder="Objet"
            onChange={handleInput}
          />
        </label>
        <label htmlFor="message" className="mailer_form_label">
          <textarea
            name="message"
            className="mailer_form_textarea"
            placeholder="Tapez votre message ici..."
            value={emailFormData.message}
            onChange={handleInput}
          />
        </label>
      </div>
      <div className="mailer_form_select_container">
        <label htmlFor="cvUrl" className="mailer_form_label">
          <select
            name="cvUrl"
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
        <label htmlFor="mmUrl" className="mailer_form_label">
          <select
            name="mmUrl"
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
      </div>
    </form>
  );
};

const mapStateToProps = ({
  custom: { emailFormData, motivMailList, cvList, user, contactBookList },
}) => ({
  emailFormData,
  motivMailList,
  cvList,
  user,
  contactBookList,
});

const mapDispatchToProps = (dispatch) => ({
  setEmailFormData: setEmailFormDataAction(dispatch),
  getMMId: getMMIdAction(dispatch),
  getCvId: getCvIdAction(dispatch),
  getCurrentContactId: getCurrentContactIdAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MailerForm);
