import { useMemo } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';


import styles from './text-field.module.css';

function TextField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
  style,
  className,
  pattern,
  title,
}) {
  const id = useMemo(() => nanoid(), []);
  const fieldStyles = style ? styles.inputGrams : styles.input;
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={`${fieldStyles} ${className}`}
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
      />
    </div>
  );
}
export default TextField;

TextField.defaultProps = {
    onChange: () => { },
    placeholder: "Input data"
}

TextField.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    style: PropTypes.string,
    className: PropTypes.string,
    pattern: PropTypes.string,
    title: PropTypes.string,
}