import React from 'react';
import Footer from '../Components/Layout/Footer/Footer';
import HeroSection from '../Components/HeroSection/HeroSection';
import Main from '../Components/Containers/Main';
import Cases from '../Components/Cases/Cases';
import Video from '../Components/Video/Video';
import Contact from '../Components/Contact/Contact';
import Chatbot from "../Components/Chatbot/Chatbot";

export default function Home() {
  return (
    <Main>
      <div>
        <Chatbot />
      </div>
      <HeroSection />
      <Cases />
      <Video />
      <Contact />
      <Footer />
    </Main>
  )
}
