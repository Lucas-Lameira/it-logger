import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

export default function AddTechModal() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  function handleFirstNameInput (event) {
    setFirstName(event.target.value);
  };

  function handleLastNameInput (event) {
    setLastName(event.target.value);
  };
 
  function handleSubmit() {
    if(firstName === '' || lastName === '') 
      M.toast({html: 'Please enter a message and tech'});
    else {
      setFirstName('false');
      setLastName('false');
    }
  }

  return (
    <div id="add-tech-modal" className="modal">
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input 
              type="text" 
              name="firstName" 
              value={firstName} 
              onChange={handleFirstNameInput}
            />
            <label htmlFor="firstName" className="active">First Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input 
              type="text" 
              name="lastName" 
              value={lastName} 
              onChange={handleLastNameInput}
            />
            <label htmlFor="lastName" className="active">Last Name</label>
          </div>
        </div>        
      </div>
      <div className="modal-footer">        
        <a 
          href="#!" 
          className="modal-close waves-effect waves-light btn green lighten" 
          onClick={handleSubmit}
        >
        <i className="material-icons right">person_add</i>
        Enter
        </a>          
      </div>
    </div>
  )
}
