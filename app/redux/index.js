import { combineReducers } from "redux";
import symbolsReducer from "./symbols.js";

const appReducer = combineReducers({
  symbols: symbolsReducer,
});

export default appReducer;
