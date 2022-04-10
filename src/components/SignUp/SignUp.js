import React, { useState } from "react";
import "./SignUp.css";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { db } from "../../firebase.js";
import firebase from "firebase";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function SignUp({ showModal, setShowModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const modal = {
    open: { y: "0" },
    closed: { y: "-100vh" },
  };

  const signUp = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        db.collection("users").doc(data.user.uid).set({
          first_name: firstname,
          last_name: lastname,
          uid: data.user.uid,
          image_url: "image.jpg",
          createdAt: new Date(),
          is_online: false,
        });
        setShowModal(!showModal);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <motion.div
      variants={modal}
      animate={showModal ? "open" : "closed"}
      className="sign-up"
    >
      <div className="sign-up-header">
        <h1>Sign Up</h1>
        <Link to="/signin" onClick={() => setShowModal(!showModal)}>
          <CloseIcon />
        </Link>
      </div>
      <div className="sign-up-body">
        <form autoComplete="off" onSubmit={signUp}>
          <TextField
            label="First Name"
            placeholder="Enter First Name"
            fullWidth
            style={{ margin: "10px 20px", width: "calc(100% - 40px)" }}
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            label="Last Name"
            placeholder="Enter Last Name"
            fullWidth
            style={{ margin: "10px 20px", width: "calc(100% - 40px)" }}
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <TextField
            label="Email Address"
            placeholder="Enter Email Address"
            fullWidth
            style={{ margin: "10px 20px", width: "calc(100% - 40px)" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            style={{ margin: "10px 20px", width: "calc(100% - 40px)" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Confirm Password"
            placeholder="Confirm your Password"
            type="password"
            fullWidth
            style={{ margin: "10px 20px", width: "calc(100% - 40px)" }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            type="submit"
            style={{
              margin: "20px",
              width: "calc(100% - 40px)",
            }}
            size="large"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </motion.div>
  );
}

export default SignUp;
