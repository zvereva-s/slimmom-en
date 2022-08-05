import { useState, useCallback, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useDate from 'shared/hooks/useDate';

import { getDailyRateByUserId } from '../../redux/daily/daily-operations';
import { fetchDayInfo } from 'redux/userAte/userAte-operations.js'
import { getDailyInfo } from '../../redux/daily/daily-selectors';
import { userId } from '../../redux/auth/auth-selectors';

import Modal from '../../shared/components/Modal';
import CalculatorForm from 'modules/Calculator/CalculatorForm';
import Button from 'shared/components/Button/Button';

import styles from './calculator.module.css';

function Calculator() {

  const dispatch = useDispatch();
  const idUser = useSelector(userId);
  const { dailyRate, notAllowedProducts } = useSelector(getDailyInfo);

  const [modalOpen, setModalOpen] = useState(false);
  const date = useDate();
  
  const calories = dailyRate ? Math.floor(dailyRate) : 0;
  const foodNotEat = notAllowedProducts?.slice(0, 4);
  const renderArr = foodNotEat?.map((el, idx) => (
    <li className={styles.item} key={idx}>
      {el}
    </li>
  ));
  let navigate = useNavigate();

  const showModal = useCallback(() => {
    setModalOpen(true);
  }, []);

  const onSubmitModal = () => {
    navigate('/diary', { replace: true }); 
  };

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  function onSubmit(data) {
    const obj = {
      data: data,
      userId: idUser,
    };
    dispatch(getDailyRateByUserId(obj));
    showModal();
  }
  
  useEffect(() => {
    dispatch(fetchDayInfo(date))
  }, [dispatch, date])

  return (
    <div className={styles.wrapper}>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <h2 className={styles.modal__title}>
            Your recommended daily calorie intake is
          </h2>
          <p className={styles.modal__calories}>
            {calories} <span className={styles.ccal}>ккал</span>
          </p>
          <p className={styles.modal__listTitle}>Foods you should not eat</p>
          <ol className={styles.modal__list}>{renderArr}</ol>
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
export default Calculator;
