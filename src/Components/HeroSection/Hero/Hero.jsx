import React from 'react'
import ButtonHero from './Button/ButtonHero'

export default function Hero() {
    return (
        <div className="hero__container">
            <p className="hero__text">Imagine, crie, implemente e
                <span className="text__change">evolua</span>
            </p>
            <p className="text__description">Porque não basta resolver apenas os conflitos do mundo do direito.</p>
            <ButtonHero />
        </div>
    )
}
