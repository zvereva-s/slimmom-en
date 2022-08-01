import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import styles from './button.module.css';

function Button({ text, type, onClick, isLoading }) {
  const style = isLoading ? styles.isDeleting : styles.button;
  return (
    <button className={style} type={type} onClick={onClick} disabled={isLoading} >
      {isLoading && <Spinner />}{text}
    </button>
  );
}
export default Button;

Button.defaultProps = {
  onClick: () => { },
  isLoading: false,
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};