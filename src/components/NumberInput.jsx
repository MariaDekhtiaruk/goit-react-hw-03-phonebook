import PropTypes from 'prop-types';
const NumberInput = ({ title, value, onChange, pattern }) => {
  return (
    <>
      <h2>{title}</h2>
      <input
        value={value}
        type="tel"
        name="number"
        pattern={pattern}
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={onChange}
      />
    </>
  );
};

NumberInput.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.string,
  onChange: PropTypes.func,
};
export default NumberInput;
