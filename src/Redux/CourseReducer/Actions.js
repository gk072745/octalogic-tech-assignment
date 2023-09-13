import * as types from "./ActionTypes";
import axios from "axios";

// get requests for courses
export const getCourseRequest = () => {
  return { type: types.GET_COURSE_REQUEST };
};

export const getCourseSuccess = (payload) => {
  return { type: types.GET_COURSE_SUCCESS, payload };
};

export const getCourseError = (payload) => {
  return { type: types.GET_COURSE_ERROR, payload };
};

export const getCourses = (payload) => (dispatch) => {
  dispatch(getCourseRequest());

  try {
    if (payload) {
      axios({
        url: `http://localhost:3000/courses?q=${payload}`,
      }).then(({ data }) => {
        dispatch(getCourseSuccess(data));
      });
    } else {
      axios({
        url: "http://localhost:3000/courses",
      }).then(({ data }) => {
        dispatch(getCourseSuccess(data));
      });
    }
  } catch (error) {
    dispatch(getCourseSuccess(error.massage));
  }
};
