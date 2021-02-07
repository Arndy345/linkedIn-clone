import React, { useState, useEffect } from "react";
import "./Feeds.css";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import SubscriptionIcon from "@material-ui/icons/Subscriptions";
import InputOptions from "./InputOptions";
import Post from "./Post.js";
import { db } from "./firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move"

function Feeds() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  const sendPosts = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      desc: user.email,
      message: input,
      photoUrl: user.photoUrl || " ",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
    console.log(posts);
  };
  return (
    <div className="feeds">
      <div className="feeds__top">
        <div className="feeds__form">
          <CreateIcon />
          <form action="">
            <input
              type="text"
              placeholder="Start a post"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" onClick={sendPosts}>
              Send
            </button>
          </form>
        </div>
        <div className="feeds__options">
          <InputOptions Icon={ImageIcon} title="Photos" color="blue" />
          <InputOptions Icon={SubscriptionIcon} title="Video" color="orange" />
          <InputOptions Icon={EventNoteIcon} title="Event" color="light-gray" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="red"
          />
        </div>
      </div>
      <div className="feeds__post">
      <FlipMove>
      {posts.map(({ id, data: { name, desc, message, photoUrl } }) => (
          <Post
            key={id}
            name={user.displayName}
            desc={user.email}
            message={message}
            photoUrl={user.photoUrl}
          />
        ))}
      </FlipMove>
        
      </div>
    </div>
  );
}

export default Feeds;
