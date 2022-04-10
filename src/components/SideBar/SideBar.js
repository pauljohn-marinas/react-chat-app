import React from "react";
import "./SideBar.css";
import logo from "../../images/logo.png";
import SideBarMenu from "../SideBarMenu/SideBarMenu";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import SettingsIcon from "@material-ui/icons/Settings";
import GroupIcon from "@material-ui/icons/Group";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <SideBarMenu Icon={QuestionAnswerIcon} menu="Message" />
      <SideBarMenu Icon={GroupIcon} menu="Find" />
      <SideBarMenu Icon={SettingsIcon} menu="Settings" />
      <SideBarMenu Icon={ExitToAppIcon} menu="Sign Out" />
    </div>
  );
}

export default SideBar;
