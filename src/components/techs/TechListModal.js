import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techAction';

function TechListModal({getTechs, tech: {techs, loading}}) { 
  useEffect(() => {   
    getTechs();
  }, []);  

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading && 
          techs !== null &&
          techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>        
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
}

const mapStateProps = state => ({
  tech: state.tech
});

export default connect( mapStateProps, {getTechs})(TechListModal);
