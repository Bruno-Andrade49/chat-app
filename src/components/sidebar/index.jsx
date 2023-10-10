import React from 'react'
import * as C from "./styles"
import SidebarHeader from '../sidebarHeader'
import SidebarChats from '../sidebarChats'

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <C.Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />

    </C.Container>
  )
}

export default Sidebar
