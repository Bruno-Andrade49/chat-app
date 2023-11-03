import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;

  &.me {
    > div {
      background-color: #9191e0;
    }

    > div > span {
      color: black;
    }
    justify-content: right;
  }


`;

export const Content = styled.div`
  background-color: #424289;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: rgba(255, 255, 255, 0.15) 0px -48px 100px 0px;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
`;

export const Message = styled.span`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
  color: aliceblue;
`;

export const MessageDate = styled.span`
  font-size: 11px;
  color: #999;
  text-align: right;
  height: 15px;
  margin: -5px 5px 0;
`;

export const PhotoURL = styled.img`
  width: 30px;
  max-height: 30px;
  border-top-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  margin-bottom: 8px;
`