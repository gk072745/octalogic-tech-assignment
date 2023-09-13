import { getData, setData } from "../Configs";
import * as types from "./ActionTypes";

const initialState = getData("courseData") || {
  isLoading: false,
  isError: false,
  courses: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // getCourses request state...........................
    case types.GET_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    // getCourses success state...........................
    case types.GET_COURSE_SUCCESS:
      let courseData = {
        ...state,
        isLoading: false,
        courses: payload,
      };
      setData("courseData", courseData);
      return courseData;

    // getCourses error state...........................
    case types.GET_COURSE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    // default case
    default:
      return state;

    // ...............................
  }
};

export { reducer };
