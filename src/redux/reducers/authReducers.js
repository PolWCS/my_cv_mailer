export const bearerToken = (state = '', action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return `Bearer ${action.payload}`;
    default:
      return state;
  }
};

export const user = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_USER_RESOLVE':
      return action.payload;
    case 'SESSION_LOG_OUT':
      return null;
    default:
      return state;
  }
};
