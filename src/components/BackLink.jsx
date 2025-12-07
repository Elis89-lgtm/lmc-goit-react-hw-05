import { Children } from "react";
import { Link } from "react-router-dom";
import css from "./BackLink.module.css";
import { HiArrowLeft } from "react-icons/hi";

export const BackLink = ({ to, children }) => {
  return (
    <Link to={to} className={css.link}>
      <HiArrowLeft size="24" />
      {children}
    </Link>
  );
};
