import { searchwordActions } from "../actions/actionType";
export function searchwordReducer(state = "", action) {
  switch (action.type) {
    case searchwordActions.SET_SEARCHWORD:
      return action.keyword;
    case searchwordActions.CLEAR_SEARCHWORD:
      return "";
    default:
      return state;
  }
}
