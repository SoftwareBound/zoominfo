import React, { useState, useEffect } from "react";
import Modal from "../common/components/Modal";
const ProductItem = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalF, setModalF] = useState(false);
  useEffect(() => {
    if (modalF) {
      setShowModal(false);
    }
  }, [modalF]);

  useEffect(() => {
    if (!showModal) {
      setModalF(false);
    }
  }, [showModal]);
  const modalFlagCheck = (value) => {
    if (value) {
      setModalF(true);
    }
  };

  return (
    <div
      onClick={() => {
        setShowModal(true);
      }}
    >
      <div className="product_item_container_within">
        <div className="product_item_title">{data.productName}</div>

        <Modal
          modal_message={{
            name: data.productName,
            description: data.productDescription,
          }}
          showFlag={showModal}
          showFlagSetter={modalFlagCheck}
        />

        <img
          src={data.productImageUrl}
          alt={data.productDescription}
          width="100"
          height="100"
        />
      </div>
    </div>
  );
};

export default ProductItem;
