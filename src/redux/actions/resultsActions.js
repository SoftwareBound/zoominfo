import { resultsActions } from "./actionType";

export function initializeOffset() {
  return {
    type: resultsActions.INIT_OFFSET,
  };
}

export function increaseOffset() {
  return {
    type: resultsActions.INCREASE_OFFSET,
  };
}
