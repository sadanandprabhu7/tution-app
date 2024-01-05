import { createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
// import throttle from "lodash/throttle";
// import logger from "redux-logger";
// import { handleInitialData } from "./Actions/appActions";

import rootReducer from "./Reducers/Index";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk, logger))
// );

// store.subscribe(throttle(() => store.getState(), 1000));
// store.dispatch(handleInitialData());

export const store = createStore(rootReducer, {}, applyMiddleware(thunk));
