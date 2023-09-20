import { MenuProps } from "../../../types/menu/Menu";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import React from "react";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  menuList: MenuProps[];
}

const NavBar = React.forwardRef(
  (
    { menuList, className, ...props }: NavBarProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <nav id="navbar" ref={ref} className={className} {...props}>
        <Menu>
          {menuList.map((menu: MenuProps, _: number) => {
            return <MenuItem key={menu.seq} menu={menu} />;
          })}
        </Menu>
      </nav>
    );
  }
);
NavBar.displayName = "NavBar";
export default NavBar;
