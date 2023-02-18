import PropTypes from 'prop-types';
import { ContactPropType } from 'ContactPropType';

const ContactItem = ({ contact: { name, number, id }, onDeleteContact }) => {
  return (
    <li className="list-item">
      {name}: {number}
      <button
        type="button"
        className="button-delete"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: ContactPropType,
  onDeleteContact: PropTypes.func,
};

export default ContactItem;
