import React, { useState, useEffect } from "react";
import { BiComment, BiChevronDown } from "react-icons/bi";
import ChatMessage from './ChatMessage/ChatMessage';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if(isOpen) {
      document.body.classList.add("show-chatbot");
    } else {
      document.body.classList.remove("show-chatbot");
    }
  }, [isOpen])

  return (
    <>
    <div className="chatbot__container">
      <button
        className="chatbot__floating"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="floating__icon">{isOpen ? <BiChevronDown /> : <BiComment />}</h1>
      </button>
      {isOpen && (
        <div className="chatbot__chat">
          <ChatMessage />
        </div>
      )}
    </div>
    <body className={isOpen ? "show-chatbot" : ""}/>
    </>
  );
};
