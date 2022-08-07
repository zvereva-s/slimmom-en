import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useDate from 'shared/hooks/useDate';
import useAuthState from 'shared/hooks/useAuthState';
import useUserAteState from 'shared/hooks/useUserAteState';
import useDailyLoading from 'shared/hooks/useDailyLoading';
import Loader from 'shared/components/Loader';

import { getDailyRateByUserId } from '../../redux/daily/daily-operations';
import { fetchDayInfo } from 'redux/userAte/userAte-operations.js';
import { authUserInfo } from 'redux/auth/auth-operations';
import { getDailyInfo } from '../../redux/daily/daily-selectors';
import { userId } from '../../redux/auth/auth-selectors';

import Modal from '../../shared/components/Modal';
import ContentModal from 'shared/components/ContentModal';
import CalculatorForm from 'modules/Calculator/CalculatorForm';
import Button from 'shared/components/Button/Button';

import styles from './calculator.module.css';

function Calculator() {
  const dispatch = useDispatch();
  const idUser = useSelector(userId);
  const loadUserAte = useUserAteState().loading;
  const LoadDaily = useDailyLoading();
  const { dailyRate, notAllowedProducts } = useSelector(getDailyInfo);

  const [modalOpen, setModalOpen] = useState(false);
  const date = useDate();
  const auth = useAuthState();

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

  const onSubmitModal = useCallback(() => {
    navigate('/diary', { replace: true });
  }, [navigate]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const onSubmit = useCallback(
    data => {
      const obj = {
        data: data,
        userId: idUser,
      };
      dispatch(getDailyRateByUserId(obj));
      dispatch(authUserInfo(obj));
      showModal();
    },
    [dispatch, idUser, showModal]
  );

  useEffect(() => {
    if (!auth.userInfo.notAllowedProducts.length < 1) {
      dispatch(fetchDayInfo(date));
    }
  }, [dispatch, date, auth]);

  return (
    <div className={styles.wrapper}>
      {loadUserAte || (LoadDaily && <Loader />)}
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
export default Calculator;
