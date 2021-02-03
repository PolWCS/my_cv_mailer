import React from "react";
import axios from "axios";
import { connect } from "react-redux";

const SendMailBtn = ({ emailFormData }) => {
  const handleSubmit = () => {
    axios.post(`${process.env.REACT_APP_HOST}/email/send`, {
      to: emailFormData.to,
      subject: emailFormData.subject,
      message: emailFormData.message,
    });
  };

  return (
    <button type="button" onClick={handleSubmit}>
      SEND
    </button>
  );
};

const mapStateToProps = ({ custom: { emailFormData } }) => ({ emailFormData });

export default connect(mapStateToProps)(SendMailBtn);
