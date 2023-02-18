import NameInput from './NameInput';
import NumberInput from './NumberInput';
import { Component } from 'react';
import PropTypes from 'prop-types';
class ContactForm extends Component {
  state = {
    contactName: '',
    number: '',
  };
  onChangeName = evt => {
    this.setState({ contactName: evt.target.value });
  };
  onChangePhone = evt => {
    this.setState({ number: evt.target.value });
  };

  render() {
    const { onAddContact } = this.props;
    const { contactName, number } = this.state;

    return (
      <form
        className="phonebook-form"
        onSubmit={event => {
          event.preventDefault();
          // Validate name and number

          onAddContact({ name: contactName, number });
          this.setState({
            contactName: '',
            number: '',
          });
        }}
      >
        <NameInput
          title="Name"
          value={contactName}
          onChange={this.onChangeName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        ></NameInput>
        <NumberInput
          title="Number"
          value={number}
          onChange={this.onChangePhone}
          pattern="[0-9]{3}-?[0-9]{2}-?[0-9]{2}"
        />
        <button type="submit" className="button-add">
          Add Contact
        </button>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};
export default ContactForm;
