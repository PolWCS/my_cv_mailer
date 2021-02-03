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
