import axios from "axios";

export default {
  // called when the user attempts to log in
  login: async ({ username, password }) => {
    await axios
      .post(`${process.env.REACT_APP_HOST}/users/signin`, {
        email: username,
        password,
      })
      .then((res) => res.data)
      .then((cred) => {
        sessionStorage.setItem("auth", JSON.stringify(cred));
        return Promise.resolve();
      })
      .catch(() => Promise.reject());
    // return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
    sessionStorage.removeItem("auth");
    return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      sessionStorage.removeItem("auth");
      return Promise.reject();
    }
    return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
    return sessionStorage.getItem("auth")
      ? Promise.resolve()
      : Promise.reject();
  },
  getIdentity: () => {
    const auth = JSON.parse(sessionStorage.getItem("auth"));
    return auth
      ? Promise.resolve({ id: auth.id, fullName: auth.fullName })
      : Promise.reject();
  },
  getPermissions: () => {
    // const auth = JSON.parse(sessionStorage.getItem("auth"));
    return Promise.resolve();
    // return auth ? Promise.resolve(auth.role) : Promise.reject();
  },
};
