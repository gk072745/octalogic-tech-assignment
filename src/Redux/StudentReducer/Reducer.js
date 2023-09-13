import { getData, setData } from "../Configs";
import * as types from "./ActionTypes";

const initialState = getData("userData") || {
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
      };

    //  getStudent success state
    case types.GET_STUDENT_SUCCESS:
      const userData1 = {
        ...state,
        isLoading: false,
        students: payload,
      };
      setData("userData", userData1);
      return userData1;

    //   getStudent error state
    case types.GET_STUDENT_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    // ...........................
    //  getEnroll request state
    case types.GET_ENROLL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    //  getStudent success state
    case types.GET_ENROLL_SUCCESS:
      const userData = {
        ...state,
        isLoading: false,
        enroll: payload,
      };
      setData("userData", userData);
      return userData;

    //   getStudent error state
    case types.GET_ENROLL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //   default case
    default:
      return state;
  }
};

export { reducer };
