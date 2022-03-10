import React from "react";
import { BsFillChatDotsFill, BsEmojiSmile } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

import "./MessageBox.css";

import { useEffect, useState } from "react";
import axios from "axios";

const MessageBox = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage(e) {
    e.preventDefault();

    console.log("text: ", text);

    setMessages((prev) => {
      return [{ sender: "user", text: text }, ...prev];
    });

    axios
      .post(`https://dailogflow-integration.herokuapp.com/talktochatbot`, {
        text: text,
      })
      .then((response) => {
        console.log("response", response.data.text);

        setMessages((prev) => {
          return [{ sender: "bot", text: response.data.text }, ...prev];
        });
        e.target.reset();
        setText("");
      })
      .catch((error) => {
        console.log("error: ", error);

        setMessages((prev) => {
          return [
            { sender: "bot", text: "dummy response from chatbot" },
            ...prev,
          ];
        });
        e.target.reset();
        setText("");
      });
  }
  return (
    <>
      <div className="container">
        <div className="chatScreen">
          <div key="eachMessageIndex-message" className="message-box">
            <div className="icon">
              <BsFillChatDotsFill />
            </div>
            <div className="message-content">
              <div className="text"> hi My name is Waqar</div>
              <div className="Card"> hi My name is Waqar</div>
              <div className="suggestion"> hi My name is Waqar</div>
            </div>
          </div>

          {/* ____________________________________________________________________________________ */}
          <div key="eachMessageIndex-message" className="user">
            <div className="icon">
              <BsFillChatDotsFill />
            </div>
            <div className="message-content">hi Im Waqar</div>
          </div>

          {/* {messages?.map((eachMessage, eachMessageIndex) => (
            <div
              key={`${eachMessageIndex}-message`}
              className={eachMessage.sender !== "bot" ? "user" : "message-box"}
            >
              <div className="icon">
                <BsFillChatDotsFill />
              </div>
              <div className="message-content">{eachMessage.text}</div>
            </div>
          ))} */}
          {/* <div className="message-box ">
            <div className="icon">
              <BsFillChatDotsFill />
            </div>
            <div className="message-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              voluptatem magnam ea hic aliquid beatae? Beatae repudiandae dolore
              quidem quod. Perspiciatis nesciunt ipsum repudiandae autem ullam
              est nobis deserunt veniam.
            </div>
          </div>
          <div className="user">
            <div className="icon">
              <BsFillChatDotsFill />
            </div>
            <div className="message-content">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              voluptatem magnam ea hic aliquid beatae? Beatae repudiandae dolore
              quidem quod. Perspiciatis nesciunt ipsum repudiandae autem ullam
              est nobis deserunt veniam.
            </div>
          </div> */}
        </div>
      </div>
      <div className="messageSenderBox">
        <BsEmojiSmile />
        <form onSubmit={sendMessage} className="chat-bar">
          <input
            type="text"
            placeholder="Enter your Message"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button className="primaryBtn">
            <IoMdSend />
          </button>
        </form>
      </div>
    </>
  );
};

export default MessageBox;
