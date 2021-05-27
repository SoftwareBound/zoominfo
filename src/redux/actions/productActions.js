import { productActions } from "./actionType";
import { initializeOffset, increaseOffset } from "./resultsActions";
import { setScrollingHasMore } from "./scrollingActions";
import { getApi, getResults } from "../../common/functions/apiFunctions";
import { urls } from "../../common/titles/urls";
export function clearProducts() {
  return {
    type: productActions.CLEAR_PRODUCTS,
  };
}
export function loadProducts(offset) {
  return async function (dispatch) {
    const dataFromApi = await getApi(urls.serverUrl, 10, offset);
    if (!dataFromApi.length) {
      /* dispatch(clearProducts()); */
      return dispatch(setScrollingHasMore(false));
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
    const resultsFromApi = await getResults(
      urls.serverUrl,
      10,
      offset,
      searchValue
    );
    debugger;
    if (!resultsFromApi) {
      dispatch(clearProducts());
      dispatch(setScrollingHasMore(false));
    }
    if (!resultsFromApi.length) {
      return dispatch(setScrollingHasMore(false));
    }

    if (offset !== 0) {
      dispatch(addProducts(resultsFromApi));
    } else {
      dispatch(initializeOffset());
      dispatch(getProducts(resultsFromApi));
    }
    dispatch(increaseOffset());
    if (resultsFromApi.length < 10) {
      dispatch(setScrollingHasMore(false));
    }
  };
}

export function clearSearchedProducts(offset) {
  return async function (dispatch) {
    await dispatch(loadProducts(offset));
    dispatch(setScrollingHasMore(true));
  };
}
