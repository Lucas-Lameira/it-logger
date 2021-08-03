import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteTech } from '../../actions/techAction';
import M from 'materialize-css/dist/js/materialize.min.js';

function TechItem({tech, deleteTech}) {

  function handleDelete () {

    //comment to add the feature: are you sure?
    deleteTech(tech.id);
    M.toast({html: `${tech.firstName} ${tech.lastName} deleted`})
  }

  return (
    <li className="collection-item">
      <div>
        {`${tech.firstName} ${tech.lastName}`}
        <a href="#!" className="secondary-content" onClick={handleDelete}>
          <i className="material-icons grey-text">delete</i> 
        </a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
  tech: PropTypes.object.isRequired, 
  deleteTech: PropTypes.func.isRequired
}

export default connect(null, {deleteTech})(TechItem)