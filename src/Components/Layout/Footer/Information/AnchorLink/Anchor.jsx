import React from 'react';
import PropTypes from "prop-types"
import { Link } from 'react-router-dom';

Anchor.propstype = {
    to: PropTypes.string,
    nameLink: PropTypes.string,
}

export default function Anchor({to, nameLink}) {
  return (
    <Link className="link link--underline" to={to}>{nameLink}</Link>
  )
}
