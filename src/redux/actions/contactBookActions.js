import axios from "axios";

// GET cv's user list
export const getContactBookListAction = (dispatch) => async () => {
  dispatch({
    type: "FETCH_CONTACT_BOOK_LIST_BEGIN",
  });
  const response = await axios.get(
    `${process.env.REACT_APP_HOST}/contact_book`
  );
  const { data } = response;
  dispatch({
    type: "FETCH_CONTACT_BOOK_LIST_RESOLVE",
    payload: data,
  });
};

export const getCurrentContactIdAction = (dispatch) => async (email) => {
  const response = await axios.post(
    `${process.env.REACT_APP_HOST}/contact_book/emailSearch`,
    { email: email }
  );
  const { data } = response;
  dispatch({
    type: "SET_CURRENT_CONTACT",
    payload: data,
  });
};

export const setCurrentContactAction = (dispatch) => async (contact) => {
  if (contact) {
    dispatch({
      type: "SET_CURRENT_CONTACT",
      payload: contact,
    });
  } else {
    dispatch({
      type: "RESET_CURRENT_CONTACT",
    });
  }
};
