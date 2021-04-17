import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {updateLog} from '../../actions/logActions';

import M from 'materialize-css/dist/js/materialize.min.js';

function EditLogModal ({current, updateLog}) {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  
  useEffect(() => {
    if(current){
      setMessage(current.message);
      setAttention(current.attention)
      setTech(current.tech);
    }
  }, [current])

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
      console.log('hello');
      
      const updatedLog = {
        id: current.id,
        message,
        attention,
        tech,
        date: new Date
      };


      updateLog(updatedLog);

      M.toast({html: `log updated by ${tech}`});

      setAttention(false);
      setMessage('');
      setTech('');
    }
  };

  return (
    <div id="edit-log-modal" className="modal">
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
            <label htmlFor="message" className="active">...</label>
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
              <option value="um berto">um berto</option>            
              <option value="dois berto">dois berto</option>            
              <option value="tres berto">tres berto</option>            
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

const mapStateToProps = state =>({
  current: state.log.current
})

export default connect(mapStateToProps, {updateLog})(EditLogModal);