import React, { useEffect, useState } from 'react';
import TechItem from './TechItem';

export default function TechListModal() {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
  }, []);

  async function getTechs() {
    setLoading(true);

    const response = await fetch('/techs');
    const data = await response.json();

    console.log(data)
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>        
  );
};
