import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { label, handleClick } = props;
  return (
    <button style={styles.button} onClick={handleClick}>
      {label}
    </button>
  );
};

const styles = {
  button: {
    width: 100,
    height: 35,
    color: 'green',
    fontSize: 24,
    borderRadius: 6,
    margin: 25,
    textAlign: 'center',
    fontWeight: 700
  }
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  label: 'Click'
};

export default Button;
