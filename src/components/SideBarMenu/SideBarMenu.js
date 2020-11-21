import React from "react";
import "./SideBarMenu.css";

function SideBarMenu({ Icon, menu }) {
  return (
    <ul className="sidebar-menu">
      <Icon />
      <li className="menu-links">{menu}</li>
    </ul>
  );
}

export default SideBarMenu;
