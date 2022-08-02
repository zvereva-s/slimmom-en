import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { ReactComponent as Close } from '../../../images/close.svg';

import Button from '../Button/Button';
import styles from './modal.module.css';

const modal = document.getElementById('modal');

const Modal = props => {
  const { children, closeModal } = props;

  useEffect(() => {
    document.addEventListener('keydown', handleClose);
    return () => document.removeEventListener('keydown', handleClose);
  });

  function handleClose({ target, currentTarget, code }) {
    if (target === currentTarget || code === 'Escape') {
      closeModal();
    }
  }

  return createPortal(
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal}>
        <div className={styles.btn__wrapper}>
          <Button
            className={styles.btnClose}
            type={'button'}
            onClick={closeModal}
          >
            <Close />
          </Button>
        </div>
        <div className={styles.info}>{children}</div>
      </div>
    </div>,
    modal
  );
};

export default Modal;

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
