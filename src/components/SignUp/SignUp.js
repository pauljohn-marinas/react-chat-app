import React, { useState } from "react";
import "./SignUp.css";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from '@material-ui/lab/Alert';
import firebase from "firebase";
import { db } from "../../firebase.js";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/userSlice"


function SignUp({ showModal, setShowModal }) {

  const dispatch = useDispatch();
  const [fullname, setFullname] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerError, setRegisterError] = useState("");
  
  const modal = {
    open: { y: "0" },
    closed: { y: "-100vh" },
  };

  const signUp = (e) => {

    e.preventDefault();
    if(!fullname){
      setRegisterError("Please enter a full name!")
    }else{
      firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        // add user data to users collection
        db.collection("users").doc(data.user.uid).set({
          full_name: fullname,
          uid: data.user.uid,
          image_url: profilePic,
          createdAt: new Date(),
          is_online: false,
        });
      })
      .then((userAuth) => {
        // update the name and url property that is sent back with the desired value
        userAuth.user.updateProfile({
          displayName: fullname,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login(
              {
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fullname,
                photoUrl: profilePic
              }
            )
          )
        });
        setShowModal(!showModal);
      })
      .catch(function (error) {
        setRegisterError(error.message);
      });
    }
    
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
          <Alert 
            severity="error"
            style={ registerError ? { display: "flex", marginTop: "10px"} : { display: "none", marginTop: "10px"}}
          >
              {registerError}
          </Alert>
          <TextField
            label="Full Name"
            placeholder="Enter First Name"
            fullWidth
            style={{ margin: "10px 20px", width: "calc(100% - 40px)" }}
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <TextField
            label="Profile Picture URL(optional)"
            placeholder="Enter Profile Picture URL"
            fullWidth
            style={{ margin: "10px 20px", width: "calc(100% - 40px)" }}
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
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
            onClick={signUp}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </motion.div>
  );
}

export default SignUp;
