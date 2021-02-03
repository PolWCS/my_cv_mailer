export const setEmailFormDataAction = (dispatch) => async (formData) => {
  if (formData) {
    dispatch({
      type: "SET_EMAIL_FORM_DATA",
      payload: formData,
    });
  } else {
    dispatch({
      type: "RESET_EMAIL_FORM_DATA",
    });
  }
};
