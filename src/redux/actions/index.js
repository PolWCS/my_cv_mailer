import axios from "axios";

// Récupère l'utilisateur
export const getUser = (dispatch) => async () => {
  dispatch({
    type: "FETCH_USER_BEGIN",
  });
  const { id, fullName } = JSON.parse(sessionStorage.getItem("auth"));
  const response = await axios.get(`${process.env.REACT_APP_HOST}/users/${id}`);
  const { data } = response;
  dispatch({
    type: "FETCH_USER_RESOLVE",
    payload: { ...data, fullName },
  });
};

// JWT
export const setToken = (dispatch) => async (token) => {
  dispatch({
    type: "SET_TOKEN",
    payload: token,
  });
};