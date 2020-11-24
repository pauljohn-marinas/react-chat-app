import React, { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import ChatApp from "./components/ChatApp/ChatApp";
import {
  BrowserRouter as Router,
  Redirect,
  useHistory,
} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import firebase from "firebase";

function App() {
  // const history = useHistory();
  const [{ auth_user_id }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        // history.push("/message");
        // dispatch({
        //   type: actionTypes.SET_AUTH_USER_ID,
        //   auth_user_id: user.user.uid,
        // });
        // console.log(user.user.uid);
      })
      .catch(function (error) {
        // setShowError(error.message);
        console.log(error);
      });
  };
  useEffect(() => {
    // if (auth_user_id !== null) {
    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: actionTypes.SET_AUTH_USER_ID,
          auth_user_id: authUser.user.uid,
        });
      } else {
        dispatch({
          type: actionTypes.SET_AUTH_USER_ID,
          auth_user_id: null,
        });
      }
    });
    // }
  }, []);
  console.log(auth_user_id);

  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/signin" />
        {!auth_user_id ? (
          <SignIn
            signIn={signIn}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        ) : (
          <ChatApp />
        )}
      </Router>
    </div>
  );
}

export default App;
