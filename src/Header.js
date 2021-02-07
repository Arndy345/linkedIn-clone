import React from "react";
import { useDispatch } from "react-redux";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "./HeaderOption";
import Nonso from "./Nonso.jpg";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useSelector } from "react-redux";

// https://www.flaticon.com/svg/static/icons/svg/174/174857.svg

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  const user = useSelector(selectUser);
  return (
    //Bem Naming Convention FIND OUT?
    <div className="header">
      <div className="header__left">
        <img src="" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption title="Name" Icon={HomeIcon} />
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon} />
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon} />
        <HeaderOption title="Messaging" Icon={ChatIcon} />
        <HeaderOption title="Notifications" Icon={NotificationsIcon} />
        <HeaderOption title="Me" onClick={logoutOfApp} avatar={Nonso} user={user}/>
      </div>
    </div>
  );
}

export default Header;
