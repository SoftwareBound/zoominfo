import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";
import { productActions } from "../redux/actions/actionType";
import Modal from "../common/components/Modal.js";
import "../style.css";
const ProductItemContainer = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productReducer);
  const offset = useSelector((state) => state.resultsReducer);
  useEffect(() => {
    if (productsList.length === 0) {
      dispatch(loadProducts(offset));
    }
  }, []);
  if (productsList.length === 0) {
    return <div>Loading</div>;
  }
  return (
    <div className=" row products_layout">
      {productsList.map((product) => {
        return (
          <div
            key={product.productID}
            className="col-3 product_item_container "
          >
            <ProductItem data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductItemContainer;
