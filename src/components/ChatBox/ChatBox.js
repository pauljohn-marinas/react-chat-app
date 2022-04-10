import React, { useState, useEffect } from "react";
import "./ChatBox.css";
import Avatar from "@material-ui/core/Avatar";
import { useParams } from "react-router-dom";
import db from "../../firebase";
import ChatInput from "../ChatInput/ChatInput";
import Message from "../Message/Message";

function ChatBox() {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   db.collection("users")
  //     .orderBy("createdAt", "desc")
  //     .limit(1)
  //     .get()
  //     .then((querySnapshot) => setUserDetails(querySnapshot.docs[0].data()));
  // }, []);

  useEffect(() => {
    if (userId) {
      db.collection("users")
        .doc(userId)
        .onSnapshot((snapshot) => {
          setUserDetails(snapshot.data());
        });
    }
  }, [userId]);

  // useEffect(() => {
  //   if (userId) {
  //     db.collection("conversations")
  //       .where("first_user_id", "in", [auth_user_id, userId])
  //       // .orderBy("createdAt", "desc")
  //       .onSnapshot((snapshot) => {
  //         let convoData = [];
  //         snapshot.forEach(function (doc) {
  //           convoData.push(doc.data());
  //         });

  //         let msg = convoData.filter(function (cdata) {
  //           return (
  //             (cdata.first_user_id === auth_user_id &&
  //               cdata.second_user_id === userId) ||
  //             (cdata.first_user_id === userId &&
  //               cdata.second_user_id === auth_user_id && {
  //                 id: cdata.first_user_id,
  //                 createdAt: cdata.createdAt,
  //                 authUser: cdata.first_user_id,
  //                 user: cdata.second_user_id,
  //                 message: cdata.message,
  //               })
  //           );
  //         });

  //         setMessages(msg);
  //       });
  //   }
  // }, [userId]);

  // useEffect(() => {
  //   if (userId) {
  //     async function getMessages() {
  //       const firstQuery = db
  //         .collection("conversations")
  //         .where("first_user_id", "==", auth_user_id)
  //         .where("second_user_id", "==", userId)
  //         .get();

  //       const secondQuery = db
  //         .collection("conversations")
  //         .where("first_user_id", "==", userId)
  //         .where("second_user_id", "==", auth_user_id)
  //         .get();

  //       const [firstQuerySnapshot, secondQuerySnapshot] = await Promise.all([
  //         firstQuery,
  //         secondQuery,
  //       ]);

  //       const firstQueryArray = firstQuerySnapshot.docs;
  //       const secondQueryArray = secondQuerySnapshot.docs;

  //       const queryArray = firstQueryArray.concat(secondQueryArray);

  //       return queryArray;
  //     }

  //     getMessages().then((result) => {
  //       setMessages(
  //         result.map((doc) => ({
  //           id: doc.id,
  //           createdAt: doc.data().createdAt,
  //           authUser: doc.data().first_user_id,
  //           user: doc.data().second_user_id,
  //           message: doc.data().message,
  //         }))
  //       );
  //     });
  //   }
  // }, [userId]);

  // useEffect(() => {
  //   if (userId) {
  //     db.collection("conversations")
  //       .where("first_user_id", "==", auth_user_id)
  //       .where("second_user_id", "==", contactId)
  //       .onSnapshot((snapshot) =>
  //         setMessages(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             createdAt: doc.data().createdAt,
  //             second_user_id: doc.data().user,
  //             message: doc.data().message,
  //           }))
  //         )
  //       );
  //   }
  // }, [userId]);

  return (
    <div className="chat-box">
      <div className="chat-box-header">
        <Avatar
          alt={`${userDetails?.first_name} ${userDetails?.last_name}`}
          src={userDetails?.image_url}
        />
        <div className="contact-info">
          <h3>{`${userDetails?.first_name} ${userDetails?.last_name}`}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <hr />
      <div className="chat-box-body">
        {messages.map((message, id) => (
          <Message
            key={id}
            // id={message.id}
            authUser={message.authUser}
            user={message.user}
            createdAt={message.createdAt}
            message={message.message}
          />
        ))}
      </div>
      <ChatInput />
    </div>
  );
}

export default ChatBox;
