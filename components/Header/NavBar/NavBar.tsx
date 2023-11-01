import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem";
import React from "react";

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  menuList: any[];
}

const NavBar = React.forwardRef(
  (
    { menuList, className, ...props }: NavBarProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    return (
      <nav id="navbar" ref={ref} className={className} {...props}>
        <Menu>
          {menuList.map((menu: any, _: number) => {
            return <MenuItem key={menu.seq} menu={menu} />;
          })}
        </Menu>
      </nav>
    );
  }
);
NavBar.displayName = "NavBar";
export default NavBar;
