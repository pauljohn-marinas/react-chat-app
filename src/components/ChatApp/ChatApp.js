import React from "react";
import "./ChatApp.css";
import SideBar from "../SideBar/SideBar";
import TopNavigation from "../TopNavigation/TopNavigation";
import ContactBox from "../ContactBox/ContactBox";
import ChatBox from "../ChatBox/ChatBox";
import { Switch, Route, Redirect } from "react-router-dom";

function ChatApp() {
  return (
    <>
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
    </>
  );
}

export default ChatApp;
