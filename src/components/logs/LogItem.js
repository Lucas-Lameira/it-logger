import React from 'react';

export default function LogItem({log}) {
  return (
    <li className="collection-item">
      <div>  
      
        {log.attention ?
          <i className="material-icons" >report_problem</i>
        : 
          <i className="material-icons">check_box</i> 
        }{' '}        
        <a 
          href="#edit-log-modal" 
          className={log.attention ? 'modal-trigger red-text' : 'modal-trigger blue-text'}>
            {log.message}
        </a>
        
        <p className="black-text">{`ID#${log.id}`}
          <span className="grey-text"> last updated by </span>
          {log.tech} on 
          <span className="grey-text"> {log.date}</span>
          <a href="#!" className="secondary-content">
            <i className="material-icons grey-text">delete</i> 
          </a>        
        </p>        
      </div>
    </li>
  )
}
