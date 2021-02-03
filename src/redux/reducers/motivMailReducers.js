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
