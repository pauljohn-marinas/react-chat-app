import React, { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import ChatApp from "./components/ChatApp/ChatApp";
import {
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from "react-router-dom";
import firebase from "firebase";
import { useSelector, useDispatch } from "react-redux"
import { selectUser, logout, login } from "./redux/userSlice"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const history = useHistory();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login(
            {
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
            }
          )
        )
      } else {
        dispatch(logout());
      }
    });
    // }
  }, []);

  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/signin" />
        {!user ? (
          <SignIn/>
        ) : (
          <ChatApp />
        )}
      </Router>
    </div>
  );
}

export default App;
