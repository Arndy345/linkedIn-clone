import React from "react";
import "./Sidebar.css";
import Nonso from "./Nonso.jpg";
import Header from "./header.jpg";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <p>
        <span className="sidebar__hash">#</span>
        {topic}
      </p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Header} alt="" />
        <Avatar src={user.photoUrl} className="sidebar__Icon">
          {user.email[0]}
        </Avatar>
        <h3>{user.displayName}</h3>
        <h2>{user.email}</h2>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2000</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2000</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <h2>Recent</h2>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("software engineering")}
        {recentItem("developer")}
        {recentItem("design")}
      </div>
    </div>
  );
}

export default Sidebar;
