import React, { useEffect, useState } from 'react';
import API from '../../../settings/API.js';
import LearnMore from './LearnMore/LearnMore.jsx';

export default function Solutions() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    API.get("/api/cases")
      .then((response) => {
        setCases(response.data.cases);
      })
      .catch((err) => {
        console.log("API não foi renderizada." + err);
      })
  }, []);

  return (
    <div className="solutions">
      <ul className="solutions__container">
        {cases.map((caseItem) => (
          <li key={caseItem.key} className="solutions__item">
            <h1 className="solutions__title">{caseItem.title}</h1>
            <p className="solutions__description">{caseItem.description}</p>
            <LearnMore link={caseItem.link} />
          </li>
        ))}
      </ul>
    </div>

  )
}