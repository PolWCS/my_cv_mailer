const initialState = {
  subject: "",
  message: "",
  date: "",
  user_id: null,
  contact_book_id: null,
  cv_id: null,
  mm_id: null,
  reply: 0,
};

export const recallMailToSendData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RECALL_MAIL_TO_SEND":
      return action.payload;
    case "RESET_RECALL_MAIL_TO_SEND":
      return initialState;
    case "SESSION_LOG_OUT":
      return initialState;
    default:
      return state;
  }
};

export const recallList = (state = [], action) => {
  switch (action.type) {
    case "SET_RECALL_LIST":
      return action.payload;
    case "RESET_RECALL_LIST":
      return [];
    case "SESSION_LOG_OUT":
      return [];
    default:
      return state;
  }
};
