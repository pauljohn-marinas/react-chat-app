import React, { useState } from "react";
import "./SignIn.css";
import logo from "../../images/logo.png";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import SignUp from "../SignUp/SignUp";
import firebase from "firebase";
import db from "../../firebase";
import { Switch, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";

function SignIn() {
  const dispatch = useDispatch();

  const signIn = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(login);
      })
      .catch(function (error) {
        // setShowError(error.message);
        console.log(error);
      });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showError, setShowError] = useState("");

  const modal = {
    open: { backgroundColor: "rgba(0,0,0,0.8)" },
    closed: { backgroundColor: "rgba(255,255,255,0.8)" },
  };

  return (
    <div className="signin">
      <motion.div
        animate={showModal ? "open" : "closed"}
        variants={modal}
        className="overlay"
      ></motion.div>
      <Switch>
        <Route path="/signup">
          <SignUp showModal={showModal} setShowModal={setShowModal} />
        </Route>
        <Route path="/signin">
          <div className="card">
            <div className="card-header">
              <img src={logo} alt="" />
              <h1>Chat App</h1>
            </div>
            <div className="card-body">
              <Alert
                severity="error"
                style={showError ? { display: "flex" } : { display: "none" }}
              >
                {showError}
              </Alert>
              <form autoComplete="off" onSubmit={signIn}>
                <TextField
                  label="Email Address"
                  placeholder="Enter Email Address"
                  type="email"
                  fullWidth
                  style={{ margin: "10px 0px", width: "100%" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  fullWidth
                  style={{ margin: "10px 0px", width: "100%" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  style={{
                    margin: "30px 0px 20px 0px",
                    width: "100% - 40px",
                  }}
                  size="large"
                  onClick={signIn}
                >
                  Sign In
                </Button>
                <Link to="/signup" onClick={() => setShowModal(!showModal)}>
                  Create New Account
                </Link>
              </form>
            </div>
          </div>
        </Route>
      </Switch>
      {/* end card */}
    </div>
  );
}

export default SignIn;
