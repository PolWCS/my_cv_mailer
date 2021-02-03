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

export const setNewCvAction = (dispatch) => async (cvData) => {
  if (cvData) {
    dispatch({
      type: "SET_NEW_CV",
      payload: cvData,
    });
  } else {
    dispatch({
      type: "RESET_NEW_CV",
    });
  }
};
