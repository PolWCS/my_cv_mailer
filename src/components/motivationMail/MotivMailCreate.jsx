import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DropZone from "../_reusable/DropZone";
import Button from "@material-ui/core/Button";

import NewMMailSave from "./buttons/NewMMailSave";

import { setNewMotivationMailAction } from "../../redux/actions/motivMailActions";

const MotivMailCreate = ({
  newMMail,
  setNewMotivationMail,
  alertGlobal,
  currentDoc,
}) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (currentDoc.url) {
      setNewMotivationMail({ ...newMMail, url: currentDoc.url });
    }
  }, [currentDoc.url]);

  const handleInput = (event) => {
    setNewMotivationMail({
      ...newMMail,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex_div_jc_center">
      <form className="app_form">
        <label htmlFor="title" className="app_label">
          <input
            placeholder="Titre"
            className="app_input"
            name="title"
            value={newMMail.title}
            onChange={handleInput}
          />
        </label>
        <div className="flex_div_jc_center">
          {!toggle ? (
            <DropZone />
          ) : (
            <label htmlFor="url" className="app_label">
              <input
                placeholder="Url"
                className="app_input"
                name="url"
                value={newMMail.url}
                onChange={handleInput}
              />
            </label>
          )}
        </div>
        <div className="flex_div_jc_center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "Poster un fichier" : "Poster une URL"}
          </Button>
          <NewMMailSave />
        </div>
        <p>{alertGlobal.message}</p>
      </form>
    </div>
  );
};

const mapStateToProps = ({
  custom: { newMMail, alertGlobal, currentDoc },
}) => ({
  newMMail,
  alertGlobal,
  currentDoc,
});

const mapDispatchToProps = (dispatch) => ({
  setNewMotivationMail: setNewMotivationMailAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MotivMailCreate);
