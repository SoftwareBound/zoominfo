import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../redux/actions/productActions";
import { productActions } from "../redux/actions/actionType";
import InfiniteScroll from "react-infinite-scroll-component";
import "../style.css";
const ProductItemContainer = () => {
  const data = new Array(50).fill().map((value, id) => ({
    id: id,
    title: "5",
    body: "6",
  }));
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productReducer);
  const offset = useSelector((state) => state.resultsReducer);

  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (productsList.length === 0) {
      dispatch(loadProducts(offset));
    }
  }, [productsList]);
  if (productsList.length === 0) {
    return <div>Loading</div>;
  }

  const getMoreData = () => {
    return dispatch(loadProducts(offset));
  };

  return (
    <InfiniteScroll
      dataLength={productsList.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage="This is it!"
      refreshFunction
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
