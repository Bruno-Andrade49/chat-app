import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./styles";
import ImgLogin from "../../assets/img/Data_security_05.jpg"
import { BiSolidHandDown } from "react-icons/bi"

const Login = () => {
  const handleSignin = () => {
    auth.signInWithPopup(provider).catch(alert);
  };
  return (
    <C.Container>
      <C.ContainerBorder>
        <C.ImagemContainer>
          <C.Imagem
            src={ImgLogin}
            alt="Imagem utilizada ao lado do login"
          />
        </C.ImagemContainer>
        <C.Login>
          <C.Titulo>SEJA BEM VINDO AO CHAT-APP!</C.Titulo>
          <C.SubTitulo>Realize seu login nas opções abaixo <BiSolidHandDown /> </C.SubTitulo>
          <C.Button onClick={handleSignin}>Login com Google</C.Button>
        </C.Login>
      </C.ContainerBorder>
    </C.Container>
  );
};

export default Login;