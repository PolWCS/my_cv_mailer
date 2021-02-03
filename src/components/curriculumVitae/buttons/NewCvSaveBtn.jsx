import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";

import {
  setAlertGlobalAction,
  setAlertGlobalFailureAction,
} from "../../../redux/actions/alertActions";

const NewCvSaveBtn = ({
  user,
  newCv,
  setAlertGlobal,
  setAlertGlobalFailure,
}) => {
  const handleSubmit = async () => {
    const formData = { title: newCv.title, url: newCv.url, user_id: user.id };
    const response = await axios
      .post(`${process.env.REACT_APP_HOST}/curriculum_vitae`, formData)
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

const mapStateToProps = ({ custom: { newCv, user } }) => ({
  newCv,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  setAlertGlobal: setAlertGlobalAction(dispatch),
  setAlertGlobalFailure: setAlertGlobalFailureAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCvSaveBtn);
