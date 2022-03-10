import React from "react";
import styled from "styled-components";
import { Container, SideBarNav } from "./SideBar";
import Avatar from "../Assets/User2.jpg";
import MessageBox from "./MessageBox";

const ChatSection = () => {
  return (
    <Container>
      <SideBarNav>
        <ChatBoxAvatar>
          <img src={Avatar} alt="Avatar/jpg" />
        </ChatBoxAvatar>
      </SideBarNav>
      <MessageBox></MessageBox>
    </Container>
  );
};

const ChatBoxAvatar = styled.div`
  width: 10%;
  margin-left: 1rem;
  border-radius: 5rem;
  height: 100%;
  background: url("${Avatar}") no-repeat;
  background-size: cover;
  cursor: pointer;

  & img {
    border-radius: 5rem;
    width: 100%;
    height: 100%;
  }
`;

export default ChatSection;
