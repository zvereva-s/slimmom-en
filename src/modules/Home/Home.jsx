import { useState, useCallback } from 'react';
import Modal from '../../shared/components/Modal';
import CalculatorForm from 'modules/Calculator/CalculatorForm';
import Button from 'shared/components/Button/Button';
import styles from './home.module.css';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const showModal = useCallback(() => {
    setModalOpen(true);
    setModalContent({
      calories: '123',
    });
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <div>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <h2 className={styles.modal__title}>
            Your recommended daily calorie intake is
          </h2>
          <p className={styles.modal__calories}>
            {modalContent.calories} <span className={styles.ccal}>ккал</span>
          </p>
          <p className={styles.modal__listTitle}>Foods you should not eat</p>
          <ol className={styles.modal__list}>
            <li className={styles.item}>123</li>
            <li className={styles.item}>234</li>
          </ol>
          <Button
            text={'Start losing weight'}
            type={'button'}
            className={styles.modalBtn}
            onClick={closeModal}
          />
        </Modal>
      )}
      <CalculatorForm onSubmit={showModal} />
    </div>
  );
}
export default Home;
