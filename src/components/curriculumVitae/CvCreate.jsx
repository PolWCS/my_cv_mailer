import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DropZone from "../_reusable/DropZone";

import Button from "@material-ui/core/Button";

import NewCvSaveBtn from "./buttons/NewCvSaveBtn";

import { setNewCvAction } from "../../redux/actions/cvActions";

const CvCreate = ({ newCv, setNewCv, alertGlobal, currentDoc }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (currentDoc.url) {
      setNewCv({ ...newCv, url: currentDoc.url });
    }
  }, [currentDoc.url]);

  const handleInput = (event) => {
    setNewCv({
      ...newCv,
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
            value={newCv.title}
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
                value={newCv.url}
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
          <NewCvSaveBtn />
        </div>
        <p>{alertGlobal.message}</p>
      </form>
    </div>
  );
};

const mapStateToProps = ({ custom: { newCv, alertGlobal, currentDoc } }) => ({
  newCv,
  alertGlobal,
  currentDoc,
});

const mapDispatchToProps = (dispatch) => ({
  setNewCv: setNewCvAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CvCreate);
