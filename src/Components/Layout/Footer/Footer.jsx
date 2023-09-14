import React from 'react';
import Brand from "../../Brand/Brand";
import SPBlackLogo from "../../../assets/images/SPLabsBlack.svg";
import CopyRight from './Copyright/CopyRight';
import Information from './Information/Information';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Brand brandLogo={SPBlackLogo} alt="SP Labs" />
        <Information />
      </div>
      <div className="line__footer"></div>
      <CopyRight />
    </footer>
  )
}