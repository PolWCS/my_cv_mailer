import React, { useState } from "react";
import { connect } from "react-redux";
import DropZone from "../_reusable/DropZone";

import { setNewMotivationMailAction } from "../../redux/actions/motivMailActions";

const MotivMailCreate = ({ newMMail, setNewMotivationMail }) => {
  const handleInput = (event) => {
    setNewMotivationMail({
      ...newMMail,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="app_form">
      <label htmlFor="title" className="app_label">
        Titre:
        <input
          className="app_input"
          name="title"
          value={newMMail.title}
          onChange={handleInput}
        />
      </label>
      <DropZone />
    </form>
  );
};

const mapStateToProps = ({ custom: { newMMail } }) => ({ newMMail });

const mapDispatchToProps = (dispatch) => ({
  setNewMotivationMail: setNewMotivationMailAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MotivMailCreate);
