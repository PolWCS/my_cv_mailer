import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { Card, CardHeader } from "@material-ui/core";

import Mailer from "./mailer/Mailer";
import Recall from "./replies/Recall";

import { setToggleAction } from "../../redux/actions/toggleActions";
import { getRecallListAction } from "../../redux/actions/historyActions";
import { setCurrentContactAction } from "../../redux/actions/contactBookActions";
import { setEmailFormDataAction } from "../../redux/actions/emailActions";

import "../../css/dashboard/Dashboard.css";

const Dashboard = ({
  user,
  setToggle,
  toggle,
  getRecallList,
  recallList,
  setCurrentContact,
  setEmailFormData,
}) => {
  useEffect(() => {
    getRecallList();
  }, []);

  return (
    <>
      <div className="dashboard_toggle_btn_container">
        {(toggle.recall || toggle.mailer) && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setCurrentContact();
              setEmailFormData();
              setToggle({ ...toggle, recall: false, mailer: false });
            }}
          >
            Retour
          </Button>
        )}
        {!toggle.mailer && (
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              setToggle({ ...toggle, recall: false, mailer: true })
            }
          >
            Mailer
          </Button>
        )}
        {!toggle.recall && (
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              setToggle({ ...toggle, recall: true, mailer: false })
            }
          >
            Recall
          </Button>
        )}
      </div>
      <div>
        <Card className="flex_div_jc_center" style={{ margin: "10px" }}>
          <CardHeader title={`Bonjour ${user && user.firstname}`} />
        </Card>
      </div>
      {!toggle.mailer && !toggle.recall && (
        <div className="flex_div_jc_center">
          <Card className="flex_div_wrap ">
            <CardHeader
              title={`Tu as ${recallList.length} candidatures sans réponse!`}
            />
            <Button
              style={{ margin: "10px" }}
              variant="outlined"
              color="primary"
              onClick={() =>
                setToggle({ ...toggle, recall: true, mailer: false })
              }
            >
              Voir
            </Button>
          </Card>
        </div>
      )}
      <div className="dashboard_content_container">
        {toggle.mailer && <Mailer />}
        {toggle.recall && <Recall />}
      </div>
    </>
  );
};

const mapStateToProps = ({ custom: { user, toggle, recallList } }) => ({
  user,
  toggle,
  recallList,
});

const mapDispatchToProps = (dispatch) => ({
  setToggle: setToggleAction(dispatch),
  getRecallList: getRecallListAction(dispatch),
  setCurrentContact: setCurrentContactAction(dispatch),
  setEmailFormData: setEmailFormDataAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
