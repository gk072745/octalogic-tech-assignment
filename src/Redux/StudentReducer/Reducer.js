import * as types from "./ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  students: [],
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
        isError: payload,
        students: [],
      };

    //   default case
    default:
      return state;
  }
};

export { reducer };
