import axios from "axios";

// Récupère l'utilisateur
export const getUserAction = (dispatch) => async () => {
  dispatch({
    type: "FETCH_USER_BEGIN",
  });
  const { id, fullName } = JSON.parse(sessionStorage.getItem("auth"));
  const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${id}`);
  const { data } = response;
  const { password, ...user } = data;
  dispatch({
    type: "FETCH_USER_RESOLVE",
    payload: { ...user, fullName },
  });
};

// JWT
export const setTokenAction = (dispatch) => async (token) => {
  dispatch({
    type: "SET_TOKEN",
    payload: token,
  });
};
