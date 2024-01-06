import types from "./ActionType";
import { get, post } from "../Helper/index";
import * as urls from "../../utils/urls";

export const loginRequest = (data) => (dispatch) => {
  dispatch({ type: types.TEACHER_LOGIN_API });
  get({
    url: `${urls.TEACHER_LOGIN}`,
    success: types.SET_TEACHER_LOGIN,
    failure: types.SET_TEACHER_LOGIN_ERROR,
    dispatch,
    body: data,
  });
};
export const signUpRequest = (data) => (dispatch) => {
  dispatch({ type: types.TEACHER_SIGN_UP_API });
  post({
    url: `${urls.TEACHER_SIGNUP}`,
    success: types.SET_TEACHER_SIGN_UP,
    failure: types.SET_TEACHER_SIGN_UP_ERROR,
    dispatch,
    body: data,
  });
};

export const logout = () => ({
  type: types.SET_LOGOUT,
});

export const signUpState = () => ({
  type: types.SET_SIGNUP_STATE,
});
