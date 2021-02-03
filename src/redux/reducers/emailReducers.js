const initialState = { to: null, subject: null, message: null };

export const emailFormData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_EMAIL_FORM_DATA":
      return action.payload;
    case "RESET_EMAIL_FORM_DATA":
      return initialState;
    case "SESSION_LOG_OUT":
      return initialState;
    default:
      return state;
  }
};
