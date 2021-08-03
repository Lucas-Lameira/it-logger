import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTechs } from '../../actions/techAction';

function TechSelectOptions({ getTechs, tech: {techs, loading} }) {
  useEffect(() => {
    getTechs();
  }, []);

  return (
    !loading && techs !== null &&
    techs.map(tech => (
      <option key={tech.id} value={`${tech.firstName} ${tech.lastName}`}>
        {`${tech.firstName} ${tech.lastName}`}
      </option>
    ))
  );
};

TechSelectOptions.proptypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech
});

export default connect(mapStateToProps, {getTechs})(TechSelectOptions);
