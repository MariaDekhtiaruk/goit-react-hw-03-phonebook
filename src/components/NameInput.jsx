import PropTypes from 'prop-types';
const NameInput = ({ title, onChange, value, pattern }) => {
  return (
    <>
      <h2>{title}</h2>
      <input
        value={value}
        type="text"
        name="name"
        pattern={pattern}
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChange}
      />
    </>
  );
};
NameInput.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default NameInput;
