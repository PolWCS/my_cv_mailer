const initialState = {
  show: false,
  message: "",
};

export const alertMail = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUCCESS":
      return {
        show: true,
        message: "Comme une lettre à la poste... ehe, t'as compris ? :D",
      };
    case "SET_FAILURE":
      return { show: true, message: "Une erreur s'est produite... :/" };
    case "RESET_ALERT":
      return initialState;
    default:
      return state;
  }
};

export const alertGlobal = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SUCCESS_GLOBAL":
      return {
        show: true,
        message: "Tout a été posté comme il se doit ! :D",
      };
    case "SET_FAILURE_GLOBAL":
      return { show: true, message: "Une erreur s'est produite... :/" };
    case "RESET_ALERT_GLOBAL":
      return initialState;
    default:
      return state;
  }
};
