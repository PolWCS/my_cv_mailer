export const contactBookList = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CONTACT_BOOK_LIST_RESOLVE":
      return action.payload;
    case "SESSION_LOG_OUT":
      return [];
    default:
      return state;
  }
};
