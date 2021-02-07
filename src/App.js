import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { auth } from "./firebase";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feeds from "./Feeds";
import Login from "./Login";
import Widgets from "./Widgets"
import { selectUser, logout, login } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.profileURL,
          })
        );
      } else {
        dispatchEvent(logout());
      }
    });
  }, []);

  return (
    //Bem Naming Convention FIND OUT?

    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feeds />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
