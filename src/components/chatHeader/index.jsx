import React from 'react'
import * as C from "./styles";
import { MdPerson, MdMoreVert, MdSearch } from "react-icons/md";
import { AiOutlineWechat } from "react-icons/ai"


const ChatHeader = ({ photoURL, name }) => {

    console.log(photoURL)
    
    return (
        <C.Container>
            <C.UserInfo>
                {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
                <C.NameContent>
                    <C.Name>{name}</C.Name>
                </C.NameContent>
            </C.UserInfo>
            <C.Options>
                <AiOutlineWechat />
            </C.Options>
        </C.Container>
    );
}

export default ChatHeader
