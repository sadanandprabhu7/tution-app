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

    case types.USERS_PROFILE_API:
      return { ...state, loading: true, profile: false };
    case types.SET_USERS_PROFILE_STATUS:
      return {
        ...state,
        loading: false,
        success: true,
        loggedIn: true,
        profile: action.data.data,
        current_status: action.data.data.current_status,
      };
    case types.SET_USERS_PROFILE_STATUS_ERROR:
      return { ...state, error: true };

    case types.USERS_ENTITIES_API:
      return { ...state, loading: true, entities: false };
    case types.SET_USERS_ENTITIES_STATUS:
      return {
        ...state,
        loading: false,
        success: true,
        loggedIn: true,
        entities: action.data.data,
      };
    case types.SET_USERS_ENTITIES_STATUS_ERROR:
      return { ...state, error: true };

    case types.SET_SIGNUP_STATE:
      return { ...state, current_status: action.data };

    case types.SET_LOGOUT:
      return { ...state, userDetails: false };

    default:
      return state;
  }
};

export default app;
