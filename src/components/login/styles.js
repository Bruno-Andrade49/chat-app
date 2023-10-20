import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0; /* Cor de fundo do container */
`;

export const ContainerBorder = styled.div`
  display: flex;
  border: 1px solid transparent;
  border-radius: 30px;
  width: 80%; /* Ajuste a largura do container da imagem e do formulário */
  background-color: #ffffff; /* Cor de fundo do container da imagem e do formulário */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;  
  
  @media (max-width: 1023px) {
    flex-direction: column; /* Layout de coluna em telas pequenas */
  }
`;

export const ImagemContainer = styled.div`
  flex: 1; /* Faz a imagem ocupar metade do espaço disponível */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Imagem = styled.img`
  max-width: 100%; /* Define a largura da imagem como 50% do bloco dela */
  height: auto;
  max-height: 100%;
  object-fit: cover;
  border-radius: 30px;

  @media (max-width: 1023px) {
    flex: 1;
  }
`;

export const Login = styled.div`
  flex: 1; /* Faz o formulário ocupar a outra metade do espaço disponível */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px; /* Adicione um espaçamento interno ao formulário */
  gap: 20px;
  text-align: center;
`;

export const Button = styled.button`
  transition: background-color .3s, box-shadow .3s;
    
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  cursor: pointer;

  margin-top: 10px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }
  
  &.active {
    background-color: #eeeeee;
  }
  
  &.focus {
    outline: none;
    box-shadow: 
      0 -1px 0 rgba(0, 0, 0, .04),
      0 2px 4px rgba(0, 0, 0, .25),
      0 0 0 3px #c8dafc;
  }
  
`;

export const Titulo = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 600;
  color: #00569D;
  font-size: 2rem; /* Tamanho do título */

  @media (max-width: 1023px) {
    font-size: 1.5rem; /* Tamanho do título em telas menores */
  }
`

export const SubTitulo = styled.h4`
  font-family: 'Roboto', sans-serif;
  color: #002f5c;
  opacity: 0.5;
  font-size: 1rem; /* Tamanho do subtítulo */

  @media (max-width: 1023px) {
    font-size: 0.8rem; /* Tamanho do subtítulo em telas menores */
  }

  svg {
    font-size: 1.2rem; /* Tamanho do ícone */
    position: relative;
    top: 6px;
    margin-left: 2px;
  }
`

export const ImgFaculdade = styled.img`
  width: 50px;
  border-radius: 30px;
`
