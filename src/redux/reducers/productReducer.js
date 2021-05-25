import { productActions } from "../actions/actionType";

export function productReducer(state = [], action) {
  switch (action.type) {
    case productActions.GET_PRODUCTS:
      return action.products;
    case productActions.ADD_PRODUCTS:
      return [...state, ...action.products];
    default:
      return state;
  }
}
