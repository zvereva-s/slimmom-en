import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { getDailyRate } from '../../redux/daily/daily-operations';
import { getDailyInfo } from '../../redux/daily/daily-selectors';

import Modal from '../../shared/components/Modal';
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
    document.body.style.overflow = "hidden";
    setModalOpen(true);
  }, []);


  const onSubmitModal = () => {
    navigate("/register", { replace: true });
  };


  const closeModal = useCallback(() => {
    document.body.style.overflow = "";
    setModalOpen(false);
  }, []);

  function onSubmit(data) {
    dispatch(getDailyRate(data));
    showModal();
  }

  return (
    <div>
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
export default Home;
