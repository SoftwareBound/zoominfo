import { scrollingActions } from "./actionType";

export function setScrollingHasMore(flag) {
  return { type: scrollingActions.SET_SCROLLING, flag: flag };
}
