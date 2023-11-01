"use client";
import Link from "next/link";
import styles from "./Menu.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";
import React from "react";

interface ExtendLIProps extends React.HTMLAttributes<HTMLLIElement> {
  menu: any;
}

const MenuItem = React.forwardRef(
  (
    { menu, className, ...props }: ExtendLIProps,
    ref: React.Ref<HTMLLIElement>
  ) => {
    const currentPathName = usePathname();

    const [onHover, setOnHover] = useState<boolean>(false);
    const isCurrentVisit = currentPathName === menu.href;

    return (
      <li
        role="tablist"
        className={`${styles.tablist} ${className}`}
        ref={ref}
        {...props}
      >
        <Link href={menu.href} prefetch={false}>
          <button
            className={styles.tab_button}
            onMouseEnter={() => {
              setOnHover(true);
            }}
            onMouseLeave={() => {
              setOnHover(false);
            }}
            tabIndex={-1}
          >
            <p
              className={
                onHover || isCurrentVisit
                  ? styles.active_tab_text
                  : styles.unactive_tab_text
              }
            >
              {menu.name}
            </p>
            <p
              className={onHover || isCurrentVisit ? styles.tab_bottom_box : ""}
            ></p>
          </button>
        </Link>
      </li>
    );
  }
);
MenuItem.displayName = "MenuItem";
export default MenuItem;
