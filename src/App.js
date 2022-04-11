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
import { selectUser, logout } from "./redux/userSlice"
// import { login } from "../../redux/userSlice"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  // const history = useHistory();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  
  useEffect(() => {
    // if (auth_user_id !== null) {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        // dispatch(
        //   login(
        //     {
        //       firstName: authUser.user.ifirst_n,
        //       lastName: lastname,
        //     }
        //   )
        // )
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
