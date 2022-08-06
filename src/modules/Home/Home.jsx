import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getDailyRate } from '../../redux/daily/daily-operations';
import { getDailyInfo } from '../../redux/daily/daily-selectors';

import Modal from '../../shared/components/Modal';
import ContentModal from 'shared/components/ContentModal';
import Button from 'shared/components/Button/Button';
import CalculatorForm from 'modules/Calculator/CalculatorForm';

import styles from './home.module.css';

function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { dailyRate, notAllowedProducts } = useSelector(getDailyInfo);
  const calories = dailyRate ? Math.floor(dailyRate) : 0;
  const foodNotEat = notAllowedProducts?.slice(0, 4);
  const renderArr = foodNotEat?.map((el, idx) => (
    <li className={styles.item} key={idx}>
      {el}
    </li>
  ));
  let navigate = useNavigate();

  const showModal = useCallback(() => {
    document.body.style.overflow = 'hidden';
    setModalOpen(true);
  }, []);

  const onSubmitModal = useCallback(() => {
    navigate('/register', { replace: true });
  }, [navigate]);

  const closeModal = useCallback(() => {
    document.body.style.overflow = '';
    setModalOpen(false);
  }, []);

  const onSubmit = useCallback(
    data => {
      dispatch(getDailyRate(data));
      showModal();
    },
    [dispatch, showModal]
  );

  return (
    <div>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <ContentModal calories={calories} renderArr={renderArr} />
          <Button
            text={'Start losing weight'}
            type={'button'}
            className={styles.modalBtn}
            onClick={onSubmitModal}
          />
        </Modal>
      )}
      <CalculatorForm onSubmit={onSubmit} />
    </div>
  );
}
export default Home;
