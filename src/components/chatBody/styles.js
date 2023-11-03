import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  background-image: url('https://img.freepik.com/fotos-gratis/fundo-de-papel-de-parede-colorido-embacado-artistico_58702-8343.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1697587200&semt=ais');
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;