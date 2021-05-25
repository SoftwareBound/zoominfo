import { productActions } from "./actionType";
import { initializeOffset, increaseOffset } from "./resultsActions";

import { getApi, getResults } from "../../common/functions/apiFunctions";

export function loadProducts(offset) {
  return async function (dispatch) {
    const dataFromApi = await getApi("http://localhost:4000/", 10, offset);
    if (!dataFromApi.length) {
      return;
    }
    if (offset) {
      dispatch(addProducts(dataFromApi));
    } else {
      dispatch(getProducts(dataFromApi));
    }

    dispatch(increaseOffset());
  };
}
export function getProducts(data) {
  return { type: productActions.GET_PRODUCTS, products: data };
}
export function addProducts(data) {
  return { type: productActions.ADD_PRODUCTS, products: data };
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
  };
}
