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

export const updateTeachersAddress = (data) => (dispatch) => {
  dispatch({ type: types.TEACHER_ADDRESS_API });
  post({
    url: `${urls.TEACHER_ADDRESS}`,
    success: types.SET_TEACHER_ADDRESS,
    failure: types.SET_TEACHER_ADDRESS_ERROR,
    dispatch,
    body: data,
  });
};

export const updateTeachersClass = (data) => (dispatch) => {
  dispatch({ type: types.TEACHER_CLASSES_API });
  post({
    url: `${urls.TEACHER_CLASSES}`,
    success: types.SET_TEACHER_CLASSES,
    failure: types.SET_TEACHER_CLASSES_ERROR,
    dispatch,
    body: data,
  });
};

export const updateTeachersSubject = (data) => (dispatch) => {
  dispatch({ type: types.TEACHER_SUBJECTS_API });
  post({
    url: `${urls.TEACHER_SUBJECTS}`,
    success: types.SET_TEACHER_SUBJECTS,
    failure: types.SET_TEACHER_SUBJECTS_ERROR,
    dispatch,
    body: data,
  });
};

export const updateTeachersTime = (data) => (dispatch) => {
  dispatch({ type: types.TEACHER_TIMES_API });
  post({
    url: `${urls.TEACHER_TIMES}`,
    success: types.SET_TEACHER_TIMES,
    failure: types.SET_TEACHER_TIMES_ERROR,
    dispatch,
    body: data,
  });
};
