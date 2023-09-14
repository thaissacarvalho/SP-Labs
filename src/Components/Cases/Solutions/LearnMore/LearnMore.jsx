import React from 'react';
import PropTypes from 'prop-types';

LearnMore.propstype = {
  link: PropTypes.string
}

export default function LearnMore({link}) {
  return (
    <a href={link} className="button__learnMore learnMore--change">
        SAIBA MAIS ➔
    </a>
  )
}
