import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { resultsReducer } from "./resultsReducer";

export default combineReducers({
  productReducer,
  resultsReducer,
});
