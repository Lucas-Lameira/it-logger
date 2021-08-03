import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addLog} from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechSelectOptions from '../techs/TechSelectOptions';

function AddLogModal({addLog}) {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  function handleMessageInput (event) {
    setMessage(event.target.value);
  };

  function handTechSelect (event) {
    setTech(event.target.value);
  };

  function handleAttentionCheckbox(){
    setAttention(!attention);
  };

  function handleSubmit() {
    if(message === '' || tech === '') M.toast({html: 'Please enter a message and tech'});
    else {

      const newLog = {
        message,
        attention,
        tech,
        data: new Date()
      }

      addLog(newLog);

      M.toast({html: `log added by ${tech}`});

      setAttention(false);
      setMessage('');
      setTech('');
    };
  };

  return (
    <div id="add-log-modal" className="modal">
      <div className="modal-content">
        <h4>Enter system log</h4>
        <div className="row">
          <div className="input-field">
            <input 
              type="text" 
              name="message" 
              value={message} 
              onChange={handleMessageInput}              
            />
            <label htmlFor="message" className="active">Log Message</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <select 
              name="tech" 
              value={tech} 
              className="browser-default" 
              onChange={handTechSelect}
            >
              <option value="" disabled>Select Technician</option>              
              <TechSelectOptions/>                  
            </select>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input 
                  type="checkbox" 
                  className="filled-in" 
                  checked={attention} 
                  value={attention}
                  onChange={handleAttentionCheckbox}
                />
                <span>
                <i className="material-icons" >report_problem</i>
                  Needs attention
                </span>   
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">        
        <a 
          href="#!" 
          className="modal-close waves-effect waves-light btn green lighten" 
          onClick={handleSubmit}
        >
        <i className="material-icons right">add</i>Enter
        </a>          
      </div>
    </div>
  )
}

export default connect(null, {addLog})(AddLogModal)