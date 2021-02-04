import React, { useEffect } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

import { getRecallListAction } from "../../../redux/actions/historyActions";

import "../../../css/dashboard/replies/Recall.css";

const Recall = ({
  getRecallList,
  recallList,
  contactBookList,
  motivMailList,
  cvList,
}) => {
  useEffect(() => {
    getRecallList();
  }, []);

  const handleRecall = (event) => {
    console.log(event.target.value)
  };

  return (
    <div>
      <ul>
        {recallList.length > 0 ? (
          recallList.map((e) => {
            return (
              <div className="recall_list_item_container">
                <li>{e.subject}</li>
                <button
                  type="button"
                  value={e.id}
                  onClick={(event) => handleRecall(event)}
                >
                  Recall
                </button>
              </div>
            );
          })
        ) : (
          <p>No data</p>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = ({
  custom: { recallList, contactBookList, motivMailList, cvList },
}) => ({ recallList, contactBookList, motivMailList, cvList });

const mapDispatchToProps = (dispatch) => ({
  getRecallList: getRecallListAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recall);
