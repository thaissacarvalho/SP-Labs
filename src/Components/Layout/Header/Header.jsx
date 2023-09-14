import React from 'react';
import SPLabsWhite from "../../../assets/images/SPLabsWhite.svg"
import Navigator from './Navigator/Navigator';
import Brand from '../../Brand/Brand';

export default function Header() {
  return (
    <header className="header">
        <Brand brandLogo={SPLabsWhite} alt="Brand of SP Labs"/>
        <Navigator/>
    </header>
  )
}
