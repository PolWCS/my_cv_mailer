export const cvList = (state = null, action) => {
  switch (action.type) {
    case "FETCH_CV_LIST_RESOLVE":
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
