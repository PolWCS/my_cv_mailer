export const setToggleAction = (dispatch) => async (bool) => {
  if (bool) {
    dispatch({
      type: "SET_TOGGLE",
      payload: bool,
    });
  } else {
    dispatch({
      type: "RESET_TOGGLE",
    });
  }
};
