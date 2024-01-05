import { TEACHER_LOGIN, SET_LOGIN, SET_ERROR } from "../Actions/ActionType";
import initialState from "./initialState";

const app = (state = initialState.app, action) => {
  switch (action.type) {
    case TEACHER_LOGIN:
      return { ...state, loading: true, userDetails: false };
    case SET_LOGIN:
      return {
        ...state,
        loading: false,
        success: true,
        userDetails: action.data,
        loggedIn: true,
        token: action.data.token,
      };
    case SET_ERROR:
      return { ...state, error: true };
    // case types.SET_LOUGOUT:
    //   return { ...state, userDetails: false };
    default:
      return state;
  }
};

export default app;
