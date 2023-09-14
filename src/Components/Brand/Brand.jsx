import React from "react";
import PropTypes from "prop-types";

Image.propstype = {
    brandLogo: PropTypes.string,
    alt: PropTypes.string,
}

export default function Image({ brandLogo, alt }) {
    return (
        <img src={brandLogo} alt={alt} className="logo"/>
    )
}
