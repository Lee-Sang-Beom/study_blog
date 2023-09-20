import styles from "./Menu.module.css";
import React from "react";

interface ExtendULProps extends React.HTMLAttributes<HTMLUListElement> {
  children: React.ReactNode;
}

const Menu = React.forwardRef(
  (
    { children, className, ...props }: ExtendULProps,
    ref: React.Ref<HTMLUListElement>
  ) => {
    return (
      <ul className={`${styles.menu_box} ${className}`} ref={ref} {...props}>
        {children}
      </ul>
    );
  }
);
Menu.displayName = "Menu";
export default Menu;
