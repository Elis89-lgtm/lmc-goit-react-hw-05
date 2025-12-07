import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ onClose }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log(`interval - ${Date.now()}`);
    }, 2000);

    // закриття по Escape
    const handleKeyDown = (event) => {
      if (event.cod === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    // cleanup при закритті модалки
    return () => {
      clearInterval(intervalId);
      console.log("interval cleared");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!modalRoot) {
    console.error("❌ No element with id='modal-root' in index.html");
    return null;
  }
  return createPortal(
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button className={css.closeBtn} onClick={onClose}></button>

        <h2 className={css.title}>Modal window</h2>
        <p className={css.text}>Repeat everything quickly</p>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
