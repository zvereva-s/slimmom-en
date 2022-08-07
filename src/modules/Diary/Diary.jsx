import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useDate from 'shared/hooks/useDate';
import useAuthState from 'shared/hooks/useAuthState';
import useUserAteState from 'shared/hooks/useUserAteState';
import Loader from 'shared/components/Loader';

import {
  fetchDayInfo,
  getDayInfoByDate,
  removeProduct,
} from 'redux/userAte/userAte-operations';
import { daysOfEatenProducts } from 'redux/userAte/userAte-selectors';

import DiaryAddProductForm from 'modules/Diary/DiaryAddProductForm';
import DiaryDateCalendar from './DiaryDateСalendar';
import DiaryProductsList from './DiaryProductsList';
import DiaryMobileMenu from './DiaryMobileMenu';
import AddButton from 'shared/components/Button/MobileAddButton';

import { ReactComponent as BackBtn } from 'images/icons/back.svg';
import styles from './diary.module.css';
import { NotificationManager } from 'react-notifications';

function Diary() {
  const dispatch = useDispatch();
  const date = useDate();
  const { loading } = useUserAteState();
  const auth = useAuthState();

  const daysUserAte = useSelector(daysOfEatenProducts);
  const dayId =
    daysUserAte &&
    (daysUserAte.find(el => el.date === date)?._id ||
      daysUserAte.find(el => el.date === date)?.id);

  let products = daysUserAte
    ? daysUserAte && daysUserAte?.find(el => el.date === date)?.eatenProducts
    : [];

  const navigate = useNavigate();
  const location = useLocation();
  const prevPageLocation = location.state?.prevPageLocation || '/';

  const [isShowed, changeShowed] = useState(false);
  const bodyEl = document.querySelector('body');

  const goBack = () => navigate(prevPageLocation);
  const openModal = () => {
    changeShowed(true);
    window.scrollTo(0, 0);
    bodyEl.classList.add('stop-scrolling');
  };
  const closeModal = () => {
    changeShowed(false);
    bodyEl.classList.remove('stop-scrolling');
  };
  window.addEventListener('resize', () => {
    let width = window.innerWidth;
    if (width > '768') {
      changeShowed(false);
    }
  });

  const onRemoveProduct = eatenProductId => {
    dispatch(removeProduct({ dayId, eatenProductId }));
    dispatch(getDayInfoByDate(date));
  };

  useEffect(() => {
    if (!auth.userInfo.notAllowedProducts.length < 1) {
      dispatch(fetchDayInfo(date));
      return;
    }
    NotificationManager.info(`Please put info on calculator form`);
    navigate('/calculator', { replace: true });
  }, [dispatch, date, auth,navigate]);

  return (
    <>
      {loading && <Loader />}

      <DiaryDateCalendar />

      <div className={styles.hideForm}>
        <DiaryAddProductForm />
      </div>

      <DiaryProductsList diary={products} removeProduct={onRemoveProduct} />
      <AddButton type="button" onClick={openModal} />
      {isShowed && <DiaryMobileMenu onClick={closeModal} type="button" />}
      {!isShowed && <BackBtn className={styles.BackBtn} onClick={goBack} />}
      {}
    </>
  );
}
export default Diary;
