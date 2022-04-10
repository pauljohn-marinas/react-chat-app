import React from "react";
import "./TopNavigation.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

function TopNavigation() {
  // const [{ auth_user_name }] = useStateValue();
  return (
    <div className="top-nav">
      <div className="nav-left">
        <SearchIcon style={{ margin: "0" }} />
        <input type="text" placeholder="Search....." />
      </div>
      <div className="nav-right">
        <NotificationsNoneIcon />
        <PeopleOutlineIcon />
        <div className="user-info">
          <div className="user-image-container">
            <img src="" alt="" />
          </div>
          <div className="user-name">test</div>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
