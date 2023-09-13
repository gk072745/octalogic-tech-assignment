import * as types from "./ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  students: [],
  enroll: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //  getStudent request state
    case types.GET_STUDENT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        students: [],
      };

    //  getStudent success state
    case types.GET_STUDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        students: payload,
      };

    //   getStudent error state
    case types.GET_STUDENT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        students: [],
      };
    // ...........................
    //  getEnroll request state
    case types.GET_ENROLL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        enroll: [],
      };

    //  getStudent success state
    case types.GET_ENROLL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        enroll: payload,
      };

    //   getStudent error state
    case types.GET_ENROLL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        enroll: [],
      };

    //   default case
    default:
      return state;
  }
};

export { reducer };
