import axios from "axios";

// GET cv's user list
export const getCvListAction = (dispatch) => async () => {
  dispatch({
    type: "FETCH_CV_LIST_BEGIN",
  });
  const response = await axios.get(
    `${process.env.REACT_APP_HOST}/curriculum_vitae`
  );
  const { data } = response;
  dispatch({
    type: "FETCH_CV_LIST_RESOLVE",
    payload: data,
  });
};
