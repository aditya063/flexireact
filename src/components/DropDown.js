import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

const DropDown = props => {
  const [input, setInput] = useState('N/A'); // using hooks to save response
  const { name, label, values, onChange } = props;

  const onChageHandler = event => {
    setInput(event.target.value);
    onChange(name, event.target.value);
  };

  const populateOptions = values => {
    return values.map((val, index) => (
      <option key={index.toString()} value={val}>
        {val}
      </option>
    ));
  };

  return (
    <div style={styles.container}>
      <label>
        {label} {' : '}
      </label>
      <select style={styles.dropdown} value={input} onChange={onChageHandler}>
        <option disabled value="N/A">
          -- select an option --
        </option>
        {populateOptions(values)}
      </select>
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
  dropdown: {
    width: '50%',
    height: 25,
    borderWidth: 0,
    borderRadius: 4,
    borderBottomWidth: 4,
    borderBottomColor: 'green'
  }
};

DropDown.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

DropDown.defaultProps = {
  label: 'Label'
};

export default DropDown;
