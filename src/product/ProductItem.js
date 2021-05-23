import React from "react";

const ProductItem = ({ data }) => {
  return (
    <div className="product_item_container_within">
      <div className="product_item_title">{data.productName}</div>

      <img
        src={data.productImageUrl}
        alt={data.productDescription}
        width="100"
        height="100"
      />
    </div>
  );
};

export default ProductItem;
