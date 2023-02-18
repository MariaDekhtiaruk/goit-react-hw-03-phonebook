import NameInput from './NameInput';
import { Component } from 'react';
import PropTypes from 'prop-types';

class Filter extends Component {
  onChangeHandler = evt => {
    this.props.onFilterUpdate(evt.target.value);
  };

  render() {
    return (
      <NameInput
        title="Find contacts by name"
        onChange={this.onChangeHandler}
      ></NameInput>
    );
  }
}

Filter.propTypes = {
  onDeleteContact: PropTypes.func,
};

export default Filter;
