import { resultsActions } from "../actions/actionType";

export function resultsReducer(state = 0, action) {
  switch (action.type) {
    case resultsActions.INIT_OFFSET:
      return 0;

    case resultsActions.INCREASE_OFFSET:
      return state + 10;
    default:
      return state;
  }
}
