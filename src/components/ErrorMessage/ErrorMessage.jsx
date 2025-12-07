import css from "./ErrorMessage.module.css";

const ErrorMessage = ({ message }) => (
  <p className={css.error}>{message || "Something went wrong"}</p>
);

export default ErrorMessage;
