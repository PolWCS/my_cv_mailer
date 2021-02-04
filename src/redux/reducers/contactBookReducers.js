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

const initialState = {
  id: null,
  email: "",
  lastname: "",
  firstname: "",
  firm: "",
};

export const currentContact = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_CONTACT":
      return action.payload;
    case "RESET_CURRENT_CONTACT":
      return initialState;
    case "SESSION_LOG_OUT":
      return initialState;
    default:
      return state;
  }
};
