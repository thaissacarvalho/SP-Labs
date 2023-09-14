import React from 'react';

export default function Navigator() {
  return (
    <nav className="navigator">
        <ul className="list__navigator">
          <a className="list__navLink link--underline" href="#cases">Cases</a>
          <a className="list__navLink link--underline" href="#contact">Contato</a>
        </ul>
    </nav>
  )
}
