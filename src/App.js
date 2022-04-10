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

function App() {
  // const history = useHistory();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  
  // useEffect(() => {
  //   // if (auth_user_id !== null) {
  //   firebase.auth().onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       dispatch({
  //         type: actionTypes.SET_AUTH_USER_ID,
  //         auth_user_id: authUser.user.uid,
  //       });
  //     } else {
  //       dispatch({
  //         type: actionTypes.SET_AUTH_USER_ID,
  //         auth_user_id: null,
  //       });
  //     }
  //   });
  //   // }
  // }, []);

  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/signin" />
        {/* {!auth_user_id ? (
          <SignIn
            signIn={signIn}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
        ) : ( */}
        <SignIn/>
         {/* <ChatApp /> */}
        {/* )} */}
      </Router>
    </div>
  );
}

export default App;
