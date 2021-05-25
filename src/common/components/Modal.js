import React, { useState, useEffect } from "react";
import ModalObj from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
const Modal = ({ modal_message, showFlag, showFlagSetter }) => {
  const [show, setShow] = useState(showFlag);

  const handleClose = () => {
    showFlagSetter(show);
  };

  useEffect(() => {
    if (showFlag) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, [showFlag]);
  return (
    <div>
      <ModalObj show={show} onHide={handleClose}>
        <ModalObj.Header>
          <ModalObj.Title>{modal_message.name}</ModalObj.Title>
        </ModalObj.Header>
        <ModalObj.Body>{modal_message.description}</ModalObj.Body>
        <ModalObj.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </ModalObj.Footer>
      </ModalObj>
    </div>
  );
};

export default Modal;
