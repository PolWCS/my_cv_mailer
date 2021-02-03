export const setCurrentDocAction = (dispatch) => async (doc) => {
  if (doc) {
    dispatch({
      type: "SET_CURRENT_DOC",
      payload: doc,
    });
  } else {
    dispatch({
      type: "RESET_CURRENT_DOC",
    });
  }
};
