import React from "react";
import "./Message.css";
import { useStateValue } from "../../StateProvider";

function Message({ authUser, message }) {
  const [{ auth_user_id }] = useStateValue();

  return (
    <div className={`message ${auth_user_id !== authUser ? "guest" : ""}`}>
      <p
        className={`message-text ${
          auth_user_id !== authUser ? "guest-text" : ""
        }`}
      >
        {message}
      </p>
    </div>
  );
}

export default Message;
