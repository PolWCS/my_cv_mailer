export const motivMailList = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOTIV_MAIL_LIST_RESOLVE":
      return action.payload;
    case "SESSION_LOG_OUT":
      return [];
    default:
      return state;
  }
};

const initialState = {
  title: "",
  url: "",
  user_id: null,
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

export const currentMMail = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_MOTIVATION_MAIL":
      return action.payload;
    case "RESET_CURRENT_MOTIVATION_MAIL":
      return initialState;
    default:
      return state;
  }
};
