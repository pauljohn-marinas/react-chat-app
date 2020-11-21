import React, { useState, useEffect } from "react";
import "./ContactBox.css";
import SearchIcon from "@material-ui/icons/Search";
import Contact from "../Contact/Contact";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";

function ContactBox() {
  const [contacts, setContacts] = useState([]);
  const [{ auth_user_id }] = useStateValue();

  useEffect(() => {
    db.collection("users")
      .where("uid", "!=", auth_user_id)
      .onSnapshot((snapshot) =>
        setContacts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            firstName: doc.data().first_name,
            lastName: doc.data().last_name,
            image: doc.data().image_url,
            status: doc.data().is_online,
          }))
        )
      );
  }, []);
  return (
    <div className="contact-box">
      <div className="contact-search">
        <SearchIcon />
        <input type="text" placeholder="Search message" />
      </div>
      <hr />
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          image={contact.image}
          status={contact.status}
        />
      ))}
    </div>
  );
}

export default ContactBox;
