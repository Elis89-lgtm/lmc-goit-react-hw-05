import css from "./SideBar.module.css";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`${css.backdrop} ${isOpen ? css.backdropVisible : ""}`}
      onClick={onClose}
    >
      <div
        className={`${css.sidebar} ${isOpen ? css.sidebarOpen : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={css.closeBtn} onClick={onClose}></button>

        <h2 className={css.title}>Sidebar</h2>

        <nav className={css.menu}>
          <a href="#profile" className={css.link}>
            Profile
          </a>
          <a href="#settings" className={css.link}>
            Settings
          </a>
          <a href="#logout" className={css.link}>
            Logout
          </a>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
