export const setLastMailSentDataAction = (dispatch) => async (mailData) => {
  if (mailData) {
    dispatch({
      type: "SET_LAST_MAIL_SENT_DATA",
      payload: mailData,
    });
  } else {
    dispatch({
      type: "RESET_LAST_MAIL_SENT_DATA",
    });
  }
};
