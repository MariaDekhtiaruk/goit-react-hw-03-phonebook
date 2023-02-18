import './App.css';
import React, { Component } from 'react';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { nanoid } from 'nanoid';
import ContactList from './Contactlist';
import Section from './Section';

const CONTACTS_CACHE_KEY = 'contactlist';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = contact => {
    if (this.state.contacts.find(item => item.name === contact.name)) {
      return alert(`${contact.name} is already in contact`);
    }
    this.setState({
      contacts: [...this.state.contacts, { ...contact, id: `id-${nanoid()}` }],
    });
  };
  deleteContact = contactId => {
    this.setState(prevContacts => ({
      contacts: prevContacts.contacts.filter(
        contact => contact.id !== contactId
      ),
    }));
    console.log(contactId);
  };

  componentDidMount() {
    const cacheContacts = localStorage.getItem(CONTACTS_CACHE_KEY);

    if (cacheContacts) {
      this.setState({
        contacts: JSON.parse(cacheContacts),
      });
    }
  }

  componentDidUpdate() {
    console.log('Im updated', this.state.contacts);

    localStorage.setItem(
      CONTACTS_CACHE_KEY,
      JSON.stringify(this.state.contacts)
    );
  }
  updateFilter = filterString => {
    this.setState({ filter: filterString });
  };
  render() {
    const { contacts, filter } = this.state;

    console.log(this.state);

    return (
      <div className="app">
        <Section title="Phonebook" childrenClassName="phonebook">
          <ContactForm
            className="phonebook"
            onAddContact={contact => this.addContact(contact)}
          />
        </Section>
        <Section title="Contacts" childrenClassName="contacts">
          <Filter
            onFilterUpdate={filterString => this.updateFilter(filterString)}
          />
          <ContactList
            contacts={contacts}
            onDeleteContact={contact => this.deleteContact(contact)}
            filter={filter}
          ></ContactList>
        </Section>
      </div>
    );
  }
}
