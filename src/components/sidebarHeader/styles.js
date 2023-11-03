import styled from "styled-components";
import { HiOutlineLogout } from "react-icons/hi"
import { BiMessageAdd } from "react-icons/bi"

export const Container = styled.div`
  height: 59px;
  background-color: #00002b;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px #0003;
`;

export const Avatar = styled.img`
  width: 35px;
  height: 35px;
  border-end-end-radius: 50%;
  border-top-left-radius: 50%;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #54656f;
    cursor: pointer;
  }
`;

export const Logout = styled(HiOutlineLogout)`
  position: relative;
  bottom: 1.1px;
  transition: 1s;

  &:hover {
    transform: scale(1.2);
    border-radius: 50px;
    background-color: #5555db;
    padding: 5px;
    color: aliceblue;
  }
`

export const NewConversa = styled(BiMessageAdd)`
  transition: 1s;

  &:hover {
    transform: scale(1.2);
    border-radius: 50px;
    background-color: #5555db;
    padding: 5px;
    color: aliceblue;
  }
`