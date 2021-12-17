import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
//import "./modal.scss";

/* Used to pop-up movie information */
const Modal = (props) => {
  const [active, setActive] = useState(false);

  /* While active show data */
  useEffect(() => {
    setActive(props.active);
  }, [props.active]);

  return (
    <div id={props.id} className={`modal ${active ? "active" : ""}`}>
      {props.children}
    </div>
  );
};

/* Render modal information then close once done */
export const ModalContent = (props) => {
  const contentRef = useRef(null);
  const closeModal = () => {
    contentRef.current.parentNode.classList.remove("active");
    if (props.onClose) {
      props.onClose();
    }
  };

  return (
    <div ref={contentRef} className="modal__content">
      {props.children}
      <div className="modal__content__close" onClick={closeModal}>
        <i className="bx bx-x"></i>
      </div>
    </div>
  );
};

/* Ensure props are the below data types */
Modal.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string,
};

ModalContent.propTypes = {
  onClose: PropTypes.func,
};

export default Modal;
