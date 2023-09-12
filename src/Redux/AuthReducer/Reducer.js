import * as types from "./ActionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  isSignup: false,
  isLogin: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // Signup request state ...................
    case types.GET_SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSignup: false,
        isError: false,
      };

    // Signup success state ...................
    case types.GET_SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSignup: true,
        isError: false,
      };

    // Signup error state ...................
    case types.GET_SIGNUP_ERROR:
      return {
        ...state,
        isLoading: false,
        isSignup: false,
        isError: true,
      };

    // Login isLoading state ...................
    case types.GET_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLogin: false,
        isError: false,
      };

    // Login success state ...................
    case types.GET_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: false,
      };

    // Login error state ...................
    case types.GET_LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: true,
      };

    // Logout isLoading state ...................
    case types.GET_LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    // Logout success state ...................
    case types.GET_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        isError: false,
      };

    // Logout error state ...................
    case types.GET_LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        isError: true,
      };

    // default case
    default:
      return state;
  }

  // ................................
};

export { reducer };
