import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '../components/TextField';
import DropDown from '../components/DropDown';
import Button from '../components/Button';

class Flexi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: props.config
    };
  }

  onChange = (name, response) => {
    this.setState(prevState => {
      const { items } = prevState.response;

      let index = items.findIndex(itm => itm.name === name);
      prevState.response.items[index].response = response;

      return prevState;
    });
  };

  renderItems = () => {
    const { config } = this.props;

    return config.items.map((item, index) => {
      let component;

      switch (item.type) {
        case 'TextField':
          component = (
            <TextField
              key={index}
              name={item.name}
              label={item.label}
              onChange={this.onChange}
            />
          );
          break;
        case 'DropDown':
          component = (
            <DropDown
              key={index}
              name={item.name}
              label={item.label}
              values={item.values}
              onChange={this.onChange}
            />
          );
          break;
        default:
          component = null;
          break;
      }

      return component;
    });
  };

  handleSubmit = () => {
    const { onSubmit } = this.props;
    onSubmit(this.state.response);
  };

  render() {
    return (
      <>
        {this.renderItems()}
        <Button label="Submit" handleClick={this.handleSubmit} />
      </>
    );
  }
}

Flexi.propTypes = {
  config: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Flexi;
