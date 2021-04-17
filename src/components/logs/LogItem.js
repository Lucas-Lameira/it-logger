import React from 'react';
import {connect} from 'react-redux';
import {deleteLog, setCurrent} from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

function LogItem({log, deleteLog, setCurrent}) {

  function handleDelete () {
    deleteLog(log.id);
    M.toast({html: 'Log deleted'});
  };


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
          className={log.attention ? 'modal-trigger red-text' : 'modal-trigger blue-text'}
          onClick={()=>setCurrent(log)}
        >
            {log.message}
        </a>
        
        <p className="black-text">{`ID#${log.id}`}
          <span className="grey-text"> last updated by </span>
          {log.tech} on 
          <span className="grey-text"> {log.date}</span>
          <a href="#!" className="secondary-content" onClick={handleDelete}>
            <i className="material-icons grey-text">delete</i> 
          </a>        
        </p>        
      </div>
    </li>
  )
}

export default connect(null, {deleteLog, setCurrent})(LogItem);