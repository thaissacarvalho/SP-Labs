import React, { useState, useEffect } from 'react';
import { BiCollapseAlt, BiExpandAlt } from 'react-icons/bi';
import { FiSend } from 'react-icons/fi';
import chatAvatar from '../../../assets/images/chat-avatar.svg';
import API from '../../../settings/API';

export default function ChatMessage() {
    const [expanded, setExpanded] = useState(false);
    const [userMessage, setUserMessage] = useState('');
    const [chatMessages, setChatMessages] = useState([]);

    const handleSize = () => {
        setExpanded(!expanded);
    };

    const handleChat = async () => {
        const trimmedMessage = userMessage.trim();

        if (!trimmedMessage) {
            return;
        }

        setUserMessage("");

        const response = await API.post("/api/chat", { message: trimmedMessage });

        setChatMessages([...chatMessages, {
            message: response.data.message,
            type: "incoming"
        }]);
    };

    useEffect(() => {
        API
            .get("/api/chat")
            .then(response => {
                setChatMessages(response.data.messages);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="chat__message" style={{ height: expanded ? 500 : 409 }}>
            <div className="chat__container">
                <header className="chat__header">
                    <img src={chatAvatar} alt="Chat Avatar" />
                    <button onClick={handleSize} className="chat__button">
                        <p className="chat__text">{expanded ? "Recolher" : "Expandir"}</p>
                        <span className="chat__icon">{expanded ? <BiCollapseAlt /> : <BiExpandAlt />}</span>
                    </button>
                </header>

                <div className="chat__hello">
                    <h1 className="chat__title">🖖🏾 Como posso ajudar?</h1>
                </div>

                <ul className="chat__box" style={{ height: expanded ? 270 : 180 }}>
                    <h1 className="chat__placebox">Role para cima ⤴︎ para ver o histórico</h1>
                    {chatMessages?.map((message, index) => (
                        <li key={index} className={message.type}>
                            {message.message}
                        </li>
                    ))}
                </ul>

                <div className="chat__input">
                    <input type="text" className="chat__text text--change" placeholder="Digite sua dúvida" value={userMessage} onChange={(e) => setUserMessage(e.target.value)} />
                    <button className="chat__send send--change" onClick={handleChat}>
                        <FiSend className="chat__icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}
