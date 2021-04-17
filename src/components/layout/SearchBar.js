import React, { useRef } from 'react';
import {connect} from 'react-redux';
import {searchLogs} from '../../actions/logActions';

function SearchBar({searchLogs}) {
  const text = useRef('');

 const handleInputChange = (e) =>{
   e.preventDefault();
    searchLogs(text.current.value)
  }

  return (
    <nav className="grey darken-4">
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input 
              id="search" 
              type="search" 
              placeholder="search logs..."
              ref={text}
              onChange={handleInputChange}
            />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default connect(null, {searchLogs})(SearchBar);