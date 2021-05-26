import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { resultsReducer } from "./resultsReducer";
import { searchwordReducer } from "./searchwordReducer";
import { scrollingReducer } from "./scrollingReducer";

export default combineReducers({
  productReducer,
  resultsReducer,
  searchwordReducer,
  scrollingReducer,
});
