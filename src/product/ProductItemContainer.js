import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import {
  loadProducts,
  getSearchedProducts,
} from "../redux/actions/productActions";

import InfiniteScroll from "react-infinite-scroll-component";
import "../style.css";
import Spinner from "react-bootstrap/Spinner";
import { messages } from "../common/titles/headlines";
const ProductItemContainer = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productReducer);
  const offset = useSelector((state) => state.resultsReducer);
  const searchWord = useSelector((state) => state.searchwordReducer);
  const hasMoreFlag = useSelector((state) => state.scrollingReducer);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (productsList.length === 0) {
      dispatch(loadProducts(offset));
    }
  }, []);
  useEffect(() => {
    if (!hasMoreFlag) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  }, [hasMoreFlag]);
  if (productsList.length === 0) {
    return (
      <div>
        <h2>{messages.NO_FOUND}</h2>
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" size="sm" />
      </div>
    );
  }

  const getMoreData = () => {
    if (!searchWord) {
      dispatch(loadProducts(offset));
    } else {
      dispatch(getSearchedProducts(offset, searchWord));
    }
  };

  return (
    <InfiniteScroll
      dataLength={productsList.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<Spinner animation="grow" />}
      endMessage={<h1>This is it</h1>}
    >
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
    </InfiniteScroll>
  );
};

export default ProductItemContainer;
