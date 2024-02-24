import types from "../Actions/ActionType";
import initialState from "./initialState";

const app = (state = initialState.app, action) => {
  switch (action.type) {
    case types.USERS_LOGIN_API:
      return { ...state, loading: true, userLoginData: false };
    case types.SET_USERS_LOGIN:
      return {
        ...state,
        loading: false,
        success: true,
        userLoginData: action.data,
        loggedIn: true,
        token: action.data.token,
        current_status: action.data.current_status,
      };
    case types.SET_USERS_LOGIN_ERROR:
      return { ...state, error: true };

    case types.USERS_PROFILE_API:
      return { ...state, loading: true, userData: false };
    case types.SET_USERS_PROFILE_STATUS:
      return {
        ...state,
        loading: false,
        success: true,
        loggedIn: true,
        userData: action.data.data,
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

    case types.GETENTITIES_LIST_API:
      return { ...state, loading: true, entities_list: false };
    case types.SET_GETENTITIES_LIST_STATUS:
      return {
        ...state,
        loading: false,
        success: true,
        loggedIn: true,
        entities_list: action.data.data,
      };
    case types.SET_GETENTITIES_LIST_STATUS_ERROR:
      return { ...state, error: true };

    case types.SET_SIGNUP_STATE:
      return { ...state, current_status: action.data };

    case types.SET_LOGOUT:
      return { ...state, userLoginData: false };

    default:
      return state;
  }
};

export default app;
