export const motivMailList = (state = null, action) => {
  switch (action.type) {
    case "FETCH_MOTIV_MAIL_LIST_RESOLVE":
      return action.payload;
    case "SESSION_LOG_OUT":
      return null;
    default:
      return state;
  }
};

const initialState = {
  title: null,
  url: null,
};

export const newMMail = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_MOTIVATION_MAIL":
      return action.payload;
    case "RESET_NEW_MOTIVATION_MAIL":
      return initialState;
    default:
      return state;
  }
};
