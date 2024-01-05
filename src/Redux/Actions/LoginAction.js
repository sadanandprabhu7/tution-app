import * as types from "./ActionType";
import { get } from "../Helper/index";
import * as urls from "../../utils/urls";

export const loginRequest = (data) => (dispatch) => {
  dispatch({ type: types.TEACHER_LOGIN });
  get({
    url: `${urls.TEACHER_LOGIN}`,
    success: types.SET_LOGIN,
    failure: types.SET_ERROR,
    dispatch,
    body: data,
  });
};
