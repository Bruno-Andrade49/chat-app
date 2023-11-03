import React from "react";
import * as C from "./styles";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebase";

const Message = ({ user, message, photoURL }) => {
  const [userLoggedIn] = useAuthState(auth);

  return (
    <C.Container>
      <C.Line className={userLoggedIn?.email === user ? "me" : ""}>
        <C.Content>
          {userLoggedIn?.email === user ? (
            <div style={{ display: "flex" }}>
              <C.PhotoURL src={userLoggedIn.photoURL} />
              <C.Message>{message.message}</C.Message>
            </div>
          ) :
            (
              <div style={{ display: "flex" }}>
                <C.PhotoURL src={photoURL} />
                <C.Message>{message.message}</C.Message>
              </div>
            )
          }
          <C.MessageDate>
            {new Date(message?.timestamp).toLocaleString()}
          </C.MessageDate>
        </C.Content>
      </C.Line>
    </C.Container>
  );
};

export default Message;