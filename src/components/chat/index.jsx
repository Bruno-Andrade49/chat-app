import React from 'react'
import * as C from "./styles";
import ChatHeader from '../chatHeader';
import ChatBody from '../chatBody';
import ChatFooter from '../chatFooter';
import Default from '../default';

const Chat = ({ userChat }) => {

  if (!userChat) {
    return <Default />
  }

  return (
    <C.Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} />
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  )
}

export default Chat;