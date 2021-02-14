import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import appReducer from "./redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

let middleware = [thunkMiddleware.withExtraArgument({ axios })];
if (process.browser) {
  middleware = [...middleware, createLogger({ collapsed: true })];
} // only log messages when running in the browser

export default createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
