import React from 'react';
import Introduction from './Introduction/Introduction';

export default function Video() {

  return (
    <section className="video">
      <div className="video__container">
        <Introduction />
        <div className="video__youtube">
          <iframe className="video__coldPlay" src="https://www.youtube.com/embed/QtXby3twMmI?si=kFf09yva2m7mAfI9" title="Coldplay - Adventure Of A Lifetime (Official Video)" 
          allowFullScreen></iframe>
        </div>
      </div>
    </section>
  )
}
