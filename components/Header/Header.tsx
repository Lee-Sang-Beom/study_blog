import styles from "./Header.module.css";
import React from "react";
import Link from "next/link";
import Avatar from "../common/Avatar/Avatar";
import NavBar from "./NavBar/NavBar";
import HeaderSearchForm from "./HeaderSearchForm/HeaderSearchForm";

const Header = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  /**
   * @avatarStyle : 이미지에 필요한 스타일 부여
   */
  const avatarStyle: React.CSSProperties = {
    borderRadius: "9999px",
    width: "100%",
    height: "50px",
    objectFit: "cover",
  };

  /**
   * @menuList :  NavBar의 메뉴 출력에 필요한 메뉴 정보
   */
  const menuList = [
    {
      seq: 1,
      name: "menu_1",
      href: "/blog/menu1",
    },
    {
      seq: 2,
      name: "menu_2",
      href: "/blog/menu2",
    },
    {
      seq: 3,
      name: "menu_3",
      href: "/blog/menu3",
    },
    {
      seq: 4,
      name: "menu_4",
      href: "/blog/menu4",
    },
    {
      seq: 5,
      name: "menu_5",
      href: "/blog/menu5",
    },
  ];

  return (
    <div
      id="header"
      ref={ref}
      className={`${styles.header_top} ${className}`}
      {...props}
    >
      <div className={styles.header_left}>
        <Link href="/">
          <Avatar
            alt="블로그 B팀"
            src="/img/icon-blog_logo.png"
            style={avatarStyle}
            className={"avatar_className"}
          />
        </Link>
      </div>

      <div className={styles.header_center}>
        <NavBar menuList={menuList} />
      </div>
      <div className={styles.header_right}>
        <HeaderSearchForm />
      </div>
    </div>
  );
});
Header.displayName = "Header";
export default Header;
