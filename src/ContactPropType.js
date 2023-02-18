import PropTypes from 'prop-types';

export const ContactPropType = PropTypes.exact({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
}).isRequired;
