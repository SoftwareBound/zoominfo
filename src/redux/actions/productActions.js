import { productActions } from "./actionType";
import { initializeOffset, increaseOffset } from "./resultsActions";

import { getApi, getResults } from "../../common/functions/apiFunctions";
export function loadProducts(offset) {
  return async function (dispatch) {
    debugger;
    const dataFromApi = await getApi("http://localhost:4000/", 10, offset);

    dispatch(getProducts(dataFromApi));
  };
}
export function getProducts(data) {
  return { type: productActions.GET_PRODUCTS, products: data };
}

export function getSearchedProducts(offset, searchValue) {
  return async function (dispatch) {
    dispatch(initializeOffset());
    const resultsFromApi = await getResults(
      "http://localhost:4000/",
      10,
      offset,
      searchValue
    );
    dispatch(getProducts(resultsFromApi));
  };
}

export function clearSearchedProducts(offset) {
  return async function (dispatch) {
    await dispatch(loadProducts(offset));
    dispatch(increaseOffset());
  };
}
