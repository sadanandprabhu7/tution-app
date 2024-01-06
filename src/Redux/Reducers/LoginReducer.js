import types from "../Actions/ActionType";
import initialState from "./initialState";

const app = (state = initialState.app, action) => {
  switch (action.type) {
    case types.TEACHER_LOGIN_API:
      return { ...state, loading: true, userDetails: false };
    case types.SET_TEACHER_LOGIN:
      return {
        ...state,
        loading: false,
        success: true,
        userDetails: action.data,
        loggedIn: true,
        token: action.data.token,
      };
    case types.SET_TEACHER_LOGIN_ERROR:
      return { ...state, error: true };

    case types.TEACHER_SIGN_UP_API:
      return { ...state, loading: true, signUp: false };
    case types.SET_TEACHER_SIGN_UP:
      return {
        ...state,
        loading: false,
        success: true,
        signUp: action.data,
      };
    case types.SET_TEACHER_SIGN_UP_ERROR:
      return { ...state, error: true };
    case types.SET_SIGNUP_STATE:
      return { ...state, signUp: null };
    case types.SET_LOGOUT:
      return { ...state, userDetails: false };
    default:
      return state;
  }
};

export default app;
