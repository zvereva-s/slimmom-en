import PropTypes from 'prop-types';

import styles from './radio-field.module.css';

function RadioField({ id, value, onChange, htmlFor, num }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      <input
        className={styles.input}
        type="radio"
        name="bloodType"
        value={value}
        id={id}
        onChange={onChange}
      />
      <span className={styles.span}>{num}</span>
    </label>
  );
}

export default RadioField;

RadioField.defaultProps = {
  onChange: () => {},
};

RadioField.propTypes = {
  num: PropTypes.string,
  htmlFor: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
