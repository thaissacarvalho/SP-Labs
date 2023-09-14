import React from 'react';
import Anchor from './AnchorLink/Anchor';
import Title from './Title/Title';

export default function Information() {
    return (
        <div className="informationContainer">
            <div className="informationContainer__site">
                <div className="site__container">
                    <Title linkSite="#hero" titleName="SP Labs" />
                    <Anchor to="/#" nameLink="Politica de Privacidade" />
                </div>

                <div className="site__container">
                    <Title linkSite=".#" titleName="Sem Processo" />
                    <div className="site__ContainerLink">
                        <Anchor to="https://www.semprocesso.com.br" nameLink="Site" />
                        <Anchor to=".#" nameLink="Produtos" />
                        <Anchor to="https://www.semprocesso.com.br/blog" nameLink="Blog" />
                    </div>
                </div>
            </div>
        </div>
    )
}
