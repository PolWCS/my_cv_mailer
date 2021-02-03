export const contactBookList = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CONTACT_BOOK_LIST_RESOLVE":
      return action.payload;
    case "SESSION_LOG_OUT":
      return null;
    default:
      return state;
  }
};