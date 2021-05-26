import { scrollingActions } from "../actions/actionType";

export function scrollingReducer(state = true, action) {
  switch (action.type) {
    case scrollingActions.SET_SCROLLING:
      return action.flag;
    default:
      return state;
  }
}
