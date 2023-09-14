import React from 'react'
import Proptypes from 'prop-types';

Title.propstype = {
    title: Proptypes.string,
}

export default function Title({title}) {
  return (
    <h1 className="title">{title}</h1>
  )
}
