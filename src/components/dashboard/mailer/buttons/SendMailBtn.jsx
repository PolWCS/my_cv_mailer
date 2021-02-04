import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import { setToggleAction } from "../../../../redux/actions/toggleActions";
import { setEmailFormDataAction } from "../../../../redux/actions/emailActions";

const SendMailBtn = ({
  emailFormData,
  currentMMail,
  currentCv,
  user,
  currentContact,
  setToggle,
  setEmailFormData,
}) => {
  const handleSubmit = async () => {
    await axios.post(`${process.env.REACT_APP_HOST}/email/send`, {
      to: emailFormData.to,
      subject: emailFormData.subject,
      message: emailFormData.message,
      html: emailFormData.html,
      attachments: emailFormData.attachments,
    });
    await axios.post(`${process.env.REACT_APP_HOST}/history`, {
      subject: emailFormData.subject,
      message: emailFormData.message,
      date: new Date()
        .toLocaleDateString()
        .split("/")
        .reverse()
        .map((e, i, w) => {
          if (i === 0) {
            return e;
          } else if (i === 1) {
            return w[2];
          } else if (i === 2) {
            return w[1];
          }
        })
        .join("-"),
      user_id: user.id,
      contact_book_id: currentContact.id,
      cv_id: currentCv.id,
      mm_id: currentMMail.id,
      reply: 0,
    });
    setToggle();
    setEmailFormData();
  };

  return (
    <Button
      variant="contained"
      color="primary"
      style={{ margin: "5px", padding: "1em" }}
      onClick={handleSubmit}
    >
      Envoyer
    </Button>
  );
};

const mapStateToProps = ({
  custom: { emailFormData, currentMMail, currentCv, user, currentContact },
}) => ({ emailFormData, currentMMail, currentCv, user, currentContact });

const mapDispatchToProps = (dispatch) => ({
  setToggle: setToggleAction(dispatch),
  setEmailFormData: setEmailFormDataAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendMailBtn);
