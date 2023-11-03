import React, { useEffect } from 'react'
import * as C from "./styles"
import { HiOutlineLogout } from "react-icons/hi";
import { BiMessageAdd } from "react-icons/bi"
import * as EmailValidator from "email-validator";
import { auth, db } from "../../services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";


const SidebarHeader = ({ setUserChat }) => {

  const [user] = useAuthState(auth);

  const refChat = db.collection("chats")
    .where("users", "array-contains", user.email);
  const [chatSnapshot] = useCollection(refChat);

  const handleCreateChat = () => {
    const emailInput = prompt("Escreva o e-mail desejado:")

    if (!emailInput) return

    if (!EmailValidator.validate(emailInput)) {
      return alert("E-mail inválido!");
    } else if (emailInput === user.email) {
      return alert("Insira um e-mail diferente do seu!");
    } else if (chatExists(emailInput)) {
      return alert("Chat já existe!")
    }

    db.collection("chats").add({
      users: [user.email, emailInput]
    });
  }

  const chatExists = (emailChat) => {
    return !!chatSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    );
  };

  return (
    <C.Container>
      <C.Avatar
        src={user.photoURL}
      />
      

      <C.Options>
        <C.NewConversa onClick={handleCreateChat} />
        <C.Logout
          size={20}
          onClick={() => [auth.signOut(), setUserChat(null)]}
        />
      </C.Options>
    </C.Container>
  )
}

export default SidebarHeader;