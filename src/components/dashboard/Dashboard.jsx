import React, { useState } from "react";
import Mailer from "./mailer/Mailer";
import Recall from "./replies/Recall";
import Button from "@material-ui/core/Button";

import "../../css/dashboard/Dashboard.css";

const Dashboard = () => {
  const [toggle, setToggle] = useState({ mailer: false, recall: false });
  return (
    <>
      <div className="dashboard_toggle_btn_container">
        {(toggle.recall || toggle.mailer) && (
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              setToggle({ ...toggle, recall: false, mailer: false })
            }
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
      <div className="dashboard_content_container">
        {toggle.mailer && <Mailer />}
        {toggle.recall && <Recall />}
      </div>
    </>
  );
};

export default Dashboard;
