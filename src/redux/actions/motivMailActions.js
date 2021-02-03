import axios from "axios";

// GET cv's user list
export const getMotivMailListListAction = (dispatch) => async () => {
  dispatch({
    type: "FETCH_MOTIV_MAIL_LIST_BEGIN",
  });
  const response = await axios.get(
    `${process.env.REACT_APP_HOST}/motivation_mails`
  );
  const { data } = response;
  dispatch({
    type: "FETCH_MOTIV_MAIL_LIST_RESOLVE",
    payload: data,
  });
};

export const setNewMotivationMailAction = (dispatch) => async (mailData) => {
  if (mailData) {
    dispatch({
      type: "SET_NEW_MOTIVATION_MAIL",
      payload: mailData,
    });
  } else {
    dispatch({
      type: "RESET_NEW_MOTIVATION_MAIL",
    });
  }
};
