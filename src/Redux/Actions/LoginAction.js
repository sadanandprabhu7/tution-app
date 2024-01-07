import types from "./ActionType";
import { get } from "../Helper/index";
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
export const logout = () => ({
  type: types.SET_LOGOUT,
});

export const signUpState = (data) => ({
  type: types.SET_SIGNUP_STATE,
  data,
});
