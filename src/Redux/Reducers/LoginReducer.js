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
        current_status: action.data.current_status,
      };
    case types.SET_TEACHER_LOGIN_ERROR:
      return { ...state, error: true };

    // case types.TEACHER_SIGN_UP_API:
    //   return { ...state, loading: true, signUp: false };
    // case types.SET_TEACHER_SIGN_UP:
    //   return {
    //     ...state,
    //     loading: false,
    //     success: true,
    //     signUp: action.data,
    //   };
    // case types.SET_TEACHER_SIGN_UP_ERROR:
    //   return { ...state, error: true };
    case types.SET_SIGNUP_STATE:
      return { ...state, current_status: action.data };
    case types.SET_LOGOUT:
      return { ...state, userDetails: false };

    // case types.TEACHER_ADDRESS_API:
    //   return { ...state, loading: true, mydetails: false };
    // case types.SET_TEACHER_ADDRESS:
    //   return {
    //     ...state,
    //     success: true,
    //     loading: false,
    //     mydetails: action.data,
    //     current_status: action.data.current_status,
    //   };
    // case types.SET_TEACHER_ADDRESS_ERROR:
    //   return { ...state, error: true };

    // case types.TEACHER_CLASSES_API:
    //   return { ...state, loading: true, classes: false };
    // case types.SET_TEACHER_CLASSES:
    //   return {
    //     ...state,
    //     success: true,
    //     loading: false,
    //     classes: action.data,
    //     current_status: action.data.current_status,
    //   };
    // case types.SET_TEACHER_CLASSES_ERROR:
    //   return { ...state, error: true };

    // case types.TEACHER_SUBJECTS_API:
    //   return { ...state, loading: true, subjects: false };
    // case types.SET_TEACHER_SUBJECTS:
    //   return {
    //     ...state,
    //     success: true,
    //     loading: false,
    //     subjects: action.data,
    //     current_status: action.data.current_status,
    //   };
    // case types.SET_TEACHER_SUBJECTS_ERROR:
    //   return { ...state, error: true };

    case types.TEACHER_STATUS_API:
      return { ...state, loading: true, current_status: false };
    case types.SET_TEACHER_STATUS:
      return {
        ...state,
        success: true,
        loading: false,
        current_status: action.data.current_status,
      };
    case types.SET_TEACHER_STATUS_ERROR:
      return { ...state, error: true };

    default:
      return state;
  }
};

export default app;
