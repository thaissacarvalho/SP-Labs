import React from 'react'
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

Title.propstype = {
    titleName: PropTypes.string,
    linkSite: PropTypes.string,
}

export default function Title({titleName, linkSite}) {
  return (
    <h1 className="title">
        <Link className="title__link title__link--underline" to={linkSite}>{titleName}</Link>
    </h1>
  )
}
