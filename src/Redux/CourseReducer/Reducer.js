import * as types from "./ActionTypes";

const initialState = {
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
        isError: false,
        courses: [],
      };

    // getCourses success state...........................
    case types.GET_COURSE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        courses: payload,
      };

    // getCourses error state...........................
    case types.GET_COURSE_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        courses: [],
      };

    // default case
    default:
      return state;

    // ...............................
  }
};

export { reducer };
