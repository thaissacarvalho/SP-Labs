import React from 'react'
import Title from '../../Title/Title.jsx';

export default function Introduction() {
    return (
        <div className="introduction">
            <div className="introduction__container">
                <Title title="Problemas complexos."/>
                <h1 className="introduction__title">Soluções
                    <span className="introduction__risk">complexas</span>
                    <span className="introduction__italic">criativas_</span>
                </h1>
            </div>
            <p className="introduction__description">Confira nossos cases de sucesso que vão além do mundo juridico.</p>
        </div>
    )
}
