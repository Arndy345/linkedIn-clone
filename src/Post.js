import { Avatar } from "@material-ui/core";
import React, {forwardRef} from "react";
import "./Post.css";
import InputOptions from "./InputOptions";
import ThumbUpAllOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";

 const Post= forwardRef(({ name, desc, message, photoUrl }, ref) =>{
  return (
    <div ref = {ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{desc}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAllOutlinedIcon} color="gray" title="Like" />
        <InputOptions Icon={ChatOutlinedIcon} color="gray" title="Comment" />
        <InputOptions Icon={ShareOutlinedIcon} color="gray" title="Share" />
        <InputOptions Icon={SendOutlinedIcon} color="gray" title="Send" />
      </div>
    </div>
  );
})

export default Post;
