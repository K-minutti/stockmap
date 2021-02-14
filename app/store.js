import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import appReducer from "./redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

let middleware = [thunkMiddleware.withExtraArguement({ axios })];
if (process.browser) {
  middleware = [...middleware, createLogger({ collapsed: true })];
}

export default createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
