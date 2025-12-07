import { useToggle } from "./Hooks/Hooks.jsx";
import Modal from "./Modal.jsx";
import SideBar from "./SideBar/SideBar.jsx";

const MyComponent = () => {
  const {
    isOpen: isModalOpen,
    open: openModal,
    close: closeModal,
  } = useToggle(false);
  const {
    isOpen: isSidebarOpen,
    open: openSidebar,
    close: closeSidebar,
  } = useToggle(false);
  console.log("render MyComponent", { isModalOpen, isSidebarOpen });
  return (
    <>
      <button
        onClick={() => {
          console.log("click openModal");
          openModal();
        }}
      >
        Open Modal
      </button>

      <button
        onClick={() => {
          console.log("click openSidebar");
          openSidebar();
        }}
      >
        Open sidebar
      </button>
      {/* <button onClick={openModal}>Open Modal</button>
      <button onClick={openSidebar}>Open sidebar</button> */}
      {/* Модалка монтується/розмонтовується */}
      {isModalOpen && <Modal onClose={closeModal} />}
      {/* Сайдбар завжди є, але анімація керується через isOpen */}
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default MyComponent;
