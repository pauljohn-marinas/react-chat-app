import React, { useState, useEffect } from "react";
import "./ChatInput.css";
import SendIcon from "@material-ui/icons/Send";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";
import { useStateValue } from "../../StateProvider";

function ChatInput() {
  const [{ auth_user_id }] = useStateValue();
  const { userId } = useParams();
  const [message, setMessage] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("conversations").add({
      message: message,
      createdAt: new Date(),
      first_user_id: auth_user_id,
        second_user_id: userId,
    });
    setMessage("");
  };

  return (
    <div className="chat-input">
      <form onSubmit={sendMessage}>
        <input
          type="text"
          placeholder="Type Something"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button type="submit">
          <SendIcon />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
