import React from 'react';
import PropTypes from 'prop-types';
import '../styles/scss/ProgressBar.scss';

function ProgressBar(props) {
  const { percentage } = props;

  const barProgress = {
    flex: percentage * 0.01
  };

  return (
    <div className="progress">
      <div className="progress-bar progress-bar-bg" style={barProgress} />
    </div>
  );
}

ProgressBar.propTypes = {
  percentage: PropTypes.number.isRequired
};

export default ProgressBar;
