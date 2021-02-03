import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";

import {
  setAlertGlobalAction,
  setAlertGlobalFailureAction,
} from "../../../redux/actions/alertActions";

const NewMMailSave = ({
  user,
  newMMail,
  setAlertGlobal,
  setAlertGlobalFailure,
}) => {
  const handleSubmit = async () => {
    const formData = {
      title: newMMail.title,
      url: newMMail.url,
      user_id: user.id,
    };
    const response = await axios
      .post(`${process.env.REACT_APP_HOST}/motivation_mails`, formData)
      .catch(() => setAlertGlobalFailure());

    const { data } = response;
    if (data) setAlertGlobal("success");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleSubmit}>
      Sauver
    </Button>
  );
};

const mapStateToProps = ({ custom: { newMMail, user } }) => ({
  newMMail,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  setAlertGlobal: setAlertGlobalAction(dispatch),
  setAlertGlobalFailure: setAlertGlobalFailureAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewMMailSave);
