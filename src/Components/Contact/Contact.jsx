import React from 'react'
import Form from './Form/Form';
import Title from '../Title/Title';

export default function Contact() {
  return (
    <section id="contact" className="contact">
        <div className="contact__container">
            <Title title="Não fique parado, fale conosco"/>
            <Form/>
        </div>
    </section>
  )
}
