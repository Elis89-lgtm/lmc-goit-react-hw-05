import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.Link, isActive && css.active);
  //     Створюю функцію, яка повертає клас:
  // звичайний клас лінка + активний стиль, якщо цей маршрут зараз відкритий.
};
export const AppBar = () => {
  return (
    <header className={css.header}>
      {/* Малюю шапку сайту. */}
      <p className={css.logo}>
        <span role="img" aria-label="computer icon">
          💻
        </span>{" "}
        GoMerch Store
      </p>
      <nav className={css.nav}>
        {/* Всередині шапки — меню навігації. */}
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
        {/* Створи посилання на /products. */}
        {/* Якщо ми зараз на цій сторінці — зроби його активним. */}
      </nav>
    </header>
  );
};
