import { productActions } from "./actionType";
import { getApi } from "../../common/functions/apiFunctions";
export function loadProducts(offset) {
  return async function (dispatch) {
    const dataFromApi = await getApi("http://localhost:4000/", 10, offset);
    dispatch(getProducts(dataFromApi));
  };
}
export function getProducts(data) {
  return { type: productActions.GET_PRODUCTS, products: data };
}
