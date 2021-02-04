export const cvList = (state = [], action) => {
  switch (action.type) {
    case "FETCH_CV_LIST_RESOLVE":
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

export const newCv = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_CV":
      return action.payload;
    case "RESET_NEW_CV":
      return initialState;
    default:
      return state;
  }
};

export const currentCv = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_CV":
      return action.payload;
    case "RESET_CURRENT_CV":
      return initialState;
    default:
      return state;
  }
};
