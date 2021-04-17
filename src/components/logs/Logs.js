import React, { useEffect } from 'react';
import {connect} from 'react-redux';

import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import {getLogs} from '../../actions/logActions';

function Logs({logs, loading, getLogs}) {
 
  useEffect(() => {
    getLogs();
  }, []);  

  if(loading || logs === null) return <Preloader />

  return (    
    <ul className="collection with-header">
      <li className="collection-header"><h4 className="center">System Logs</h4></li>
      {!loading && logs.length === 0 
      ? ( <p className="center">There is no logs</p> ) 
      : (
        logs.map(log => <LogItem key={log.id} log={log}/>)
      )}
    </ul>
  );
};

//describe what we wanna get from the state
const mapStateToProps = state => ({
  //log is the name of the prop, call whatever you want
  //the log on state.log belongs to the reducer on reducers/index.js
  logs: state.log.logs,
  loading: state.log.loading
})

export default connect(mapStateToProps, {getLogs})(Logs);