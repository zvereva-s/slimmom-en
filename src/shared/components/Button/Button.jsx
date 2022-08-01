import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import styles from './button.module.css';

function Button({ text, type, onClick, isLoading, className, children }) {
  const style = isLoading ? styles.isDeleting : styles.button;
  return (
    <button
      className={`${style} ${className}`}
      type={type}
      onClick={onClick}
      disabled={isLoading}
    >
      {children}
      {isLoading && <Spinner />}
      {text}
    </button>
  );
}
export default Button;

Button.defaultProps = {
  onClick: () => {},
  isLoading: false,
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};
