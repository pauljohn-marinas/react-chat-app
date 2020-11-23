import React, { useState, useEffect } from "react";
import "./ContactBox.css";
import SearchIcon from "@material-ui/icons/Search";
import Contact from "../Contact/Contact";
// import { db } from "../../firebase";
// import { useStateValue } from "../../StateProvider";

function ContactBox() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="contact-box">
      <div className="contact-search">
        <SearchIcon />
        <input type="text" placeholder="Search message" />
      </div>
      <hr />
      <Contact />
    </div>
  );
}

export default ContactBox;
