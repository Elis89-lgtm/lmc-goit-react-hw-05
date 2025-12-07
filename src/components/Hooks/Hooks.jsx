import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);
  //   const open = () => setIsOpen(true);
  //   const close = () => setIsOpen(false);
  const open = () => {
    console.log("open() called");
    setIsOpen(true);
  };

  const close = () => {
    console.log("close() called");
    setIsOpen(false);
  };

  console.log("useToggle: isOpen =", isOpen);

  return { isOpen, open, close };
};
