import React from 'react';
import PropTypes from 'prop-types';

const TextField = props => {
  const { name, label, onChange } = props;

  return (
    <div style={styles.container}>
      <label>
        {label} {':'}
      </label>
      <input
        style={styles.textfiled}
        onChange={e => onChange(name, e.target.value)}
      />
    </div>
  );
};

const styles = {
  container: {
    margin: 10,
    display: 'flex',
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textfiled: {
    width: '50%',
    height: 25,
    borderWidth: 0,
    borderRadius: 2,
    borderBottomWidth: 4,
    borderBottomColor: 'green'
  }
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextField.defaultProps = {
  label: 'Label'
};

export default TextField;
