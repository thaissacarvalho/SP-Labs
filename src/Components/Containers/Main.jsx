import React from 'react';
import PropTypes from "prop-types";

Main.propstype = {
    children: PropTypes.string
}

export default function Main({children}) {
  return (
    <main className="app__main">
        {children}
    </main>
  )
}
