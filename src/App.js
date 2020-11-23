import React, { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import SideBar from "./components/SideBar/SideBar";
import TopNavigation from "./components/TopNavigation/TopNavigation";
import ContactBox from "./components/ContactBox/ContactBox";
import ChatBox from "./components/ChatBox/ChatBox";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import firebase from "firebase";

function App() {
  const [{ auth_user_id }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const signIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      // .then((user) => {
      //   dispatch({
      //     type: actionTypes.SET_AUTH_USER_ID,
      //     auth_user_id: user.user.uid,
      //   });
      //   console.log(user.user.uid);
      // })
      .catch(function (error) {
        // setShowError(error.message);
        console.log(error);
      });
    console.log("click");
  };
  useEffect(() => {
    if (auth_user_id !== null) {
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
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/signin" />
        {!auth_user_id ? (
          <SignIn
            signIn={signIn}
            email={email}
            setEmail={setEmail}
            password={setPassword}
            handlePassword={handlePassword}
          />
        ) : (
          <div className="main-content">
            <Redirect to="/message" />
            <Switch>
              <Route path="/message">
                <SideBar />
                <div className="content">
                  <TopNavigation />
                  <div className="content-body">
                    <ContactBox />
                    <Switch>
                      <Route path="/:userId">
                        <ChatBox />
                      </Route>
                      <Route path="/">
                        <ChatBox />
                      </Route>
                    </Switch>
                  </div>
                </div>
              </Route>
            </Switch>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;
