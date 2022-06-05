import React from "react";
import { createPortal } from "react-dom";
import CloseBtn from "../assets/close.png";
import { motion } from "framer-motion";

const Modal = ({ isOpened, children, onClose }) => {
  if (!isOpened) {
    return null;
  }

  function clickMe(event) {
    event.stopPropagation();
  }

  return createPortal(
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      className="modal-fadin fixed flex flex-col inset-0 z-10 overflow-scroll"
      onClick={onClose}
    >
      <button
        className="close-btn fixed top-0 right-0 text-white m-5 z-[99]"
        onClick={onClose}
      >
        <img
          src={CloseBtn}
          alt="Close"
          className="w-10 cursor-auto drop-shadow-lg"
        />
      </button>
      {/*<div className="overlay fixed z-20 inset-0" onClick={onClose}></div>*/}
      <div
        className="
     pb-[100px] absolute flex flex-col lg:p-[100px] p-[40px] lg:w-[1000px] w-[100%] bg-[#1e1d25] text-white left-[50%] translate-x-[-50%] z-30 drop-shadow-2xl lg:mt-[100px]"
        onClick={clickMe}
      >
        <div>
          <div className="modal-child">{children}</div>
        </div>
      </div>
    </motion.div>,
    document.getElementById("modal")
  );
};

export default Modal;
