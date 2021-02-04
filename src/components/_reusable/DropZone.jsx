import React, { useState } from "react";
import { connect } from "react-redux";
import { useDropzone } from "react-dropzone";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import { getRef } from "../../utils/index";

import { setCurrentDocAction } from "../../redux/actions/docActions";

import app from "../../base";
import "../../css/DropZone.css";

const storage = app.storage();

function DropZone({ currentDoc, setCurrentDoc, user }) {
  const [file, setFile] = useState({
    isDrop: false,
    doc: null,
    url: "",
  });

  const onDrop = (e) => {
    const doc = e[0];
    setFile({
      ...file,
      doc,
      isDrop: true,
    });
  };

  const handleDelete = () => {
    setFile({ isDrop: false, url: "", doc: null });
    setCurrentDoc();
  };

  const handleUpload = () => {
    const { doc } = file;
    if (doc.type.includes("image")) {
      const uploadTask = storage.ref(`images/${user.id}/${doc.name}`).put(doc);
      uploadTask.on("state_changed", async () => {
        const url = await storage
          .ref(`images/${user.id}`)
          .child(doc.name)
          .getDownloadURL();

        setFile({ ...file, url });
        setCurrentDoc({
          ref: `images/${user.id}/${doc.name}`,
          url: url,
        });
      });
    } else if (doc.type.includes("audio")) {
      const uploadTask = storage.ref(`audio/${user.id}/${doc.name}`).put(doc);
      uploadTask.on("state_changed", async () => {
        const url = await storage
          .ref(`audio/${user.id}`)
          .child(doc.name)
          .getDownloadURL();

        setFile({ ...file, url });
        setCurrentDoc({
          ref: `audio/${user.id}/${doc.name}`,
          url: url,
        });
      });
    } else if (doc.type.includes("video")) {
      const uploadTask = storage.ref(`video/${user.id}/${doc.name}`).put(doc);
      uploadTask.on("state_changed", async () => {
        const url = await storage
          .ref(`video/${user.id}`)
          .child(doc.name)
          .getDownloadURL();

        setFile({ ...file, url });
        setCurrentDoc({
          ref: `video/${user.id}/${doc.name}`,
          url: url,
        });
      });
    } else {
      const uploadTask = storage.ref(`text/${user.id}/${doc.name}`).put(doc);
      uploadTask.on("state_changed", async () => {
        const url = await storage
          .ref(`text/${user.id}`)
          .child(doc.name)
          .getDownloadURL();

        setFile({ ...file, url });
        setCurrentDoc({
          ref: `text/${user.id}/${doc.name}`,
          url: url,
        });
      });
    }
  };

  const handleRemove = async () => {
    const reference = await getRef(currentDoc.ref);
    reference.delete();
    setCurrentDoc();
    setFile({ isDrop: false, url: "", doc: null });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex_div_column">
      {!file.url && (
        <div className="my_drop_zone_container" {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <div className="my_drop_zone_sub_container">
              <div className="my_drop_zone_area">You can drop here now !</div>
            </div>
          ) : (
            <div className="my_drop_zone_sub_container">
              <div className="my_drop_zone_area">
                Drag&apos;n&apos;drop some files here, or click to select files
              </div>
            </div>
          )}
        </div>
      )}
      <div className="my_drop_zone_upload_file_container">
        {(file.doc || currentDoc.ref) && (
          <div>
            <span>{file.doc && file.doc.name}</span>
            <button type="button" onClick={handleDelete}>
              X
            </button>
          </div>
        )}
        {file.url !== "" &&
          currentDoc.ref &&
          currentDoc.ref.split("/").includes("images") && (
            <img
              className="my_drop_zone_upload_file"
              src={file.url}
              alt="file"
            />
          )}
        {file.url !== "" &&
          currentDoc.ref &&
          currentDoc.ref.split("/").includes("video") && (
            <video
              className="my_drop_zone_upload_file"
              src={file.url}
              alt="file"
              autoPlay
              controls
            >
              <track default kind="captions" />
            </video>
          )}
        {file.url !== "" &&
          currentDoc.ref &&
          currentDoc.ref.split("/").includes("audio") && (
            <audio
              className="my_drop_zone_upload_file"
              src={file.url}
              alt="file"
              autoPlay
              controls
            >
              <track default kind="captions" />
            </audio>
          )}
        {file.url !== "" &&
          currentDoc.ref &&
          !currentDoc.ref.split("/").includes("images") &&
          !currentDoc.ref.split("/").includes("video") &&
          !currentDoc.ref.split("/").includes("audio") && (
            <iframe
              title="text_media"
              className="my_drop_zone_upload_file"
              src={file.url}
              alt="file"
            />
          )}
      </div>
      <div className="my_drop_zone_file_buttons">
        {file.doc && !file.url && (
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SaveIcon />}
            onClick={handleUpload}
          >
            Enregistrer
          </Button>
        )}
        {file.url && (
          <>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<DeleteIcon />}
              onClick={handleRemove}
            >
              Supprimer
            </Button>
          </>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = ({ custom: { currentDoc, user } }) => ({
  currentDoc,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentDoc: setCurrentDocAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);
