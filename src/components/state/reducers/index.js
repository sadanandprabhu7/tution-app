import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentStatusReducer from "./currentStatusReducer";

const reducers = combineReducers({
  auth: authReducer,
  status: currentStatusReducer,
});
export default reducers;
