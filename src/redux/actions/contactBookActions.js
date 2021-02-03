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
