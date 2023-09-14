import React from 'react';
import { MdOutlineSurfing } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

export default function PageNFound() {
  const navigate = useNavigate();

  return (
    <main className='main__notFound'>
      <MdOutlineSurfing className="main__icon"/>
      <div className='main__container'>
          <p className='main__text'>Surfou tanto no site que parou no PAGE 404 🤣</p>
          <button onClick={() => navigate("/")} className='main__back back--change'>Back Home</button>
      </div>
    </main>
  )
}
