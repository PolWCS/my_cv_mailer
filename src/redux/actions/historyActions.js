import axios from "axios";

export const setRecallMailToSendDataAction = (dispatch) => async (mailData) => {
  if (mailData) {
    dispatch({
      type: "SET_RECALL_MAIL_TO_SEND",
      payload: mailData,
    });
  } else {
    dispatch({
      type: "RESET_RECALL_MAIL_TO_SEND",
    });
  }
};

export const setRecallListAction = (dispatch) => async (list) => {
  if (list) {
    dispatch({
      type: "SET_RECALL_LIST",
      payload: list,
    });
  } else {
    dispatch({
      type: "RESET_RECALL_LIST",
    });
  }
};

export const getRecallListAction = (dispatch) => async () => {
  const response = await axios.get(
    `${process.env.REACT_APP_HOST}/history/replies`
  );
  const { data } = response;
  if (data) {
    dispatch({
      type: "SET_RECALL_LIST",
      payload: data,
    });
    dispatch({
      type: "SET_RECALL_LIST_SUCCESS",
    });
  } else {
    dispatch({
      type: "SET_RECALL_LIST_FAILURE",
    });
  }
};
