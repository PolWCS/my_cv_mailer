import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Button from "@material-ui/core/Button";

import { getRecallListAction } from "../../../redux/actions/historyActions";

import "../../../css/dashboard/replies/Recall.css";

const Recall = ({ user, getRecallList, recallList }) => {
  const [message, setMessage] = useState({ show: false, text: "" });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    getRecallList();
  }, []);

  const handleRecall = async (id) => {
    const currentRecall = recallList.filter((recall) => +recall.id === +id);
    console.log(currentRecall[0]);
    const response1 = await axios.get(
      `${process.env.REACT_APP_HOST}/contact_book/${currentRecall[0].contact_book_id}`
    );
    const data1 = response1.data;
    const response2 = await axios.get(
      `${process.env.REACT_APP_HOST}/curriculum_vitae/${currentRecall[0].cv_id}`
    );
    const data2 = response2.data;
    const response3 = await axios.get(
      `${process.env.REACT_APP_HOST}/motivation_mails/${currentRecall[0].mm_id}`
    );
    const data3 = response3.data;
    await axios.post(`${process.env.REACT_APP_HOST}/email/send`, {
      to: data1.email,
      message: currentRecall[0].message,
      subject: currentRecall[0].subject,
      html: `<div><p>${currentRecall[0].message}</p><p>CV ${
        user && user.fullName
      } ${data2.url}</p><p>Motivation ${user && user.fullName} ${
        data3.url
      }</p></div>`,
      attachments: [
        { filename: data2.title, path: data2.url },
        { filename: data3.title, path: data3.url },
      ],
    });
    await axios.put(
      `${process.env.REACT_APP_HOST}/history/${currentRecall[0].id}`,
      {
        date: new Date()
          .toLocaleDateString()
          .split("/")
          .reverse()
          .map((e, i, w) => {
            if (i === 0) {
              return e;
            } else if (i === 1) {
              return w[2];
            } else if (i === 2) {
              return w[1];
            }
          })
          .join("-"),
      }
    );
    await getRecallList();
  };

  const handleCheck = async (id) => {
    await axios.put(`${process.env.REACT_APP_HOST}/history/${id}`, {
      reply: 1,
    });
    await getRecallList();
  };

  const handleMessage = (mess) => {
    setMessage({
      show: mess === message.text ? !message.show : true,
      text: mess,
    });
  };

  return (
    <div className="recall_container">
      <div className="recall_list_container">
        {recallList.length > 0 ? (
          recallList.map((e) => {
            return (
              <div className="recall_list_sub_container">
                <div className="recall_list_item_container">
                  <div className="recall_contact_container">
                    <p>{e.contact_book_firm}</p>
                    <p>{e.contact_book_email}</p>
                    <p>{e.subject}</p>
                  </div>
                  <div className="recall_message_btn_container">
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleMessage(e.message)}
                    >
                      Message
                    </Button>
                  </div>
                  <div className="recall_link_container">
                    <a className="recall_link" href={e.cv_url} target="_blank">
                      CV
                    </a>{" "}
                    <a className="recall_link" href={e.mm_url} target="_blank">
                      MM
                    </a>
                  </div>
                </div>
                <div className="recall_list_btn_container">
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleRecall(e.id)}
                  >
                    Renvoyer
                  </Button>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={() => handleCheck(e.id)}
                  >
                    Valider
                  </Button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No data</p>
        )}
      </div>
      <div className="recall_msg_container">{message.show && message.text}</div>
    </div>
  );
};

const mapStateToProps = ({
  custom: { recallList, contactBookList, motivMailList, cvList, user },
}) => ({ recallList, contactBookList, motivMailList, cvList, user });

const mapDispatchToProps = (dispatch) => ({
  getRecallList: getRecallListAction(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Recall);
