import { useState, useCallback } from 'react';
import Modal from '../../shared/components/Modal';
import CalculatorForm from 'modules/Calculator/CalculatorForm';
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
          <p className={styles.modal__title}>
            Your recommended daily calorie intake is
          </p>
          <p className={styles.modal__calories}>{modalContent.calories}</p>
          <p className={styles.modal__listTitle}>Foods you should not eat</p>
          <ul className={styles.modal__list}>123</ul>
        </Modal>
      )}
      <CalculatorForm onSubmit={showModal} />
    </div>
  );
}
export default Home;
