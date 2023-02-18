import PropTypes from 'prop-types';
const Section = ({ title, childrenClassName, children }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div className={childrenClassName}>{children}</div>
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
  childrenClassName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default Section;
