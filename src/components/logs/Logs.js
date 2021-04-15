import React, { useEffect, useState } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';

export default function Logs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getLogs();
  }, []);

  async function getLogs() {
    setLoading(true);

    const response = await fetch('/logs');
    const data = await response.json();

    setLogs(data);
    setLoading(false);
  };

  if(loading) return <Preloader />

  return (
    
    <ul className="collection with-header">
      <li className="collection-header"><h4 className="center">System Logs</h4></li>
      {!loading && logs.length === 0 
      ? ( <p className="center">There is no logs</p> ) 
      : (
        logs.map(log => <LogItem key={log.id} log={log}/>)
      )}
    </ul>
    
  )
}
