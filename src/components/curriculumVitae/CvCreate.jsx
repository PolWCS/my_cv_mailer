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
    <form className="app_form">
      <label htmlFor="title" className="app_label">
        Titre:
        <input
          className="app_input"
          name="title"
          value={newCv.title}
          onChange={handleInput}
        />
      </label>
      {!toggle ? (
        <DropZone />
      ) : (
        <label htmlFor="url" className="app_label">
          URL:
          <input
            className="app_input"
            name="url"
            value={newCv.url}
            onChange={handleInput}
          />
        </label>
      )}
      <div>
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
