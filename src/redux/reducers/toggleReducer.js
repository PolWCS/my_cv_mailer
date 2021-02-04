const initialState = {
  mailer: false,
  recall: false,
};

export const toggle = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOGGLE":
      return action.payload;
    case "RESET_TOGGLE":
      return initialState;
    default:
      return state;
  }
};
