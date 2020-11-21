import React from "react";
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

function App() {
  const [{ auth_user_id }] = useStateValue();

  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/signin" />
        {!auth_user_id ? (
          <SignIn />
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
                      <Route path="/chat/:userId">
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
