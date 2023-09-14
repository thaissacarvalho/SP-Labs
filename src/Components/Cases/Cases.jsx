import React from 'react';
import Introduction from './Introduction/Introduction';
import Solutions from './Solutions/Solutions';

export default function Cases() {
    return (
        <section id="cases" className="cases">
            <div className="cases__container">
                <Introduction />
                <div className="container__solutions">
                    <Solutions />
                </div>
            </div>
        </section>
    )
}
