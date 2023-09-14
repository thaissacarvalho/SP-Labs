import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';

export default function SendContact() {
  const location = useLocation();
  const { name } = location.state || {}; 

  return (
    <main className="main__contact">
      <div className="main__container">
        <div className="main__close">
          <AiOutlineClose onClick={() => {
            window.location.href = "/";
          }}/>
        </div>
        <div className="main__message">
          <h1 className="message__thanks">Obrigado pelo contato {name}!</h1>
        </div>
      </div>
    </main>
  );
}
