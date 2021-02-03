const initialState = {
  ref: null,
  url: null,
};

export const currentDoc = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CURRENT_DOC":
      return action.payload;
    case "RESET_CURRENT_DOC":
      return initialState;
    default:
      return state;
  }
};
