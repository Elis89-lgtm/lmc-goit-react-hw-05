// 1.const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   backgroundColor: "pink",
//   color: "white",
// };
// 2.const getBgColor = (variant) => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value -${variant}`);
//   }
// };
// export const Alert = ({ variant, children }) => {
//   return (
//     <p style={{ ...alertStyles, backgroundColor: getBgColor(variant) }}>
//       {children}
//     </p>
//   );
// };

//замість 2 const colors = {
//   info: "blue",
//   success: "green",
//   error: "red",
//   warning: "orange",
// };

// 3. export const Alert = ({ variant, children }) => {
//   const bgColor = colors[variant];
//   if (!bgColor) {
//     throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
//   return (
//     <p
//       style={{
//         ...alertStyles,
//         backgroundColor: bgColor,
//       }}
//     >
//       {children}
//     </p>
//   );
// };
// тепер код вже при застосуванні ванільного css

import clsx from "clsx";
import css from "./Alert.module.css";


// const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant];
//   if (outlined) {
//     classNames.push("is-outlined");
//   }
//   if (elevated) {
//     classNames.push("is-elevated");
//   }
//   return <p className={classNames.join(" ")}>{children}</p>;
// };
// Тепер цей код з допомогою бібліотеки clsx



  

const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        css.alert,
        css[variant],
        outlined && css.outlined,
        elevated && css.elevated
      )}
    >
      {children}
    </p>
  );
};


export default Alert;
