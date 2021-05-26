import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import {
  loadProducts,
  getSearchedProducts,
} from "../redux/actions/productActions";

import InfiniteScroll from "react-infinite-scroll-component";
import "../style.css";
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
  }, [productsList]);
  useEffect(() => {
    if (!hasMoreFlag) {
      setHasMore(false);
    }
  }, [hasMoreFlag]);
  if (productsList.length === 0) {
    return <div>Loading</div>;
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
      loader={<h4>Loading...</h4>}
      endMessage="This is it!"
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
