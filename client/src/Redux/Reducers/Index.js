/* eslint-disable no-param-reassign */
import { combineReducers } from "redux";
// import * as types from "../Actions/ActionTypes";
// import initialState from "./initialState";
import app from "./LoginReducer";
// import teacher from "./TeacherReducer";

const appReducer = combineReducers({
  app,
});

const rootReducer = (state, action) => {
  // if (action.type === types.REST_REDUCER_STATE) {
  //   const common = state.app.defaultTheme;
  //   state = initialState;
  //   state.app.defaultTheme = common;
  // }
  return appReducer(state, action);
};

export default rootReducer;
