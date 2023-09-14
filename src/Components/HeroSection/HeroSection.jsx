import React from 'react';
import Header from '../Layout/Header/Header';
import Hero from './Hero/Hero';

export default function HeroSection() {
  return (
    <section className="heroSection heroSection--before">
      <div className="heroSection__container">
        <Header />
        <div className="heroSection__hero">
          <Hero />
        </div>
      </div>
    </section>
  )
}
