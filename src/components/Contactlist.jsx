import ContactItem from './ContactItem';
import PropTypes from 'prop-types';
import { ContactPropType } from 'ContactPropType';

const isSubstringPresentInString = (string, substring) => {
  return string.toLowerCase().includes(substring.toLowerCase());
};

const ContactList = ({ filter, contacts, onDeleteContact }) => {
  return (
    <ul className="list">
      {contacts
        .filter(item => isSubstringPresentInString(item.name, filter))
        .map(contactItem => (
          <ContactItem
            contact={contactItem}
            key={contactItem.id}
            onDeleteContact={onDeleteContact}
          ></ContactItem>
        ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(ContactPropType),
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
