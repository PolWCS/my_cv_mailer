export const setAlertMailAction = (dispatch) => async (alert) => {
  if (alert) {
    dispatch({
      type: "SET_SUCCESS",
    });
  } else {
    dispatch({
      type: "RESET_ALERT",
    });
  }
};

export const setAlertMailFailureAction = (dispatch) => async () => {
  dispatch({
    type: "SET_FAILURE",
  });
};

export const setAlertGlobalAction = (dispatch) => async (alert) => {
  if (alert) {
    dispatch({
      type: "SET_SUCCESS_GLOBAL",
    });
  } else {
    dispatch({
      type: "RESET_ALERT_GLOBAL",
    });
  }
};

export const setAlertGlobalFailureAction = (dispatch) => async () => {
  dispatch({
    type: "SET_FAILURE_GLOBAL",
  });
};
