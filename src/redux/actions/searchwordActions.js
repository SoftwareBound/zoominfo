import { searchwordActions } from "../actions/actionType";
export function setSearchWord(word) {
  return {
    type: searchwordActions.SET_SEARCHWORD,
    keyword: word,
  };
}

export function clearSearchWord() {
  return { type: searchwordActions.CLEAR_SEARCHWORD };
}
