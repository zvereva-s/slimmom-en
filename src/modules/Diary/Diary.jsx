import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useDate from 'shared/hooks/useDate';


import { fetchDayInfo, fetchUserInfo, removeProduct} from 'redux/userAte/userAte-operations';
import { daysOfEatenProducts } from 'redux/userAte/userAte-selectors';

import DiaryAddProductForm from 'modules/Diary/DiaryAddProductForm';
import DiaryDateCalendar from './DiaryDateСalendar';
import DiaryProductsList from './DiaryProductsList';
import DiaryMobileMenu from './DiaryMobileMenu';
import AddButton from 'shared/components/Button/MobileAddButton';

import { ReactComponent as BackBtn } from 'images/back.svg';
import styles from './diary.module.css';

function Diary() {

  const dispatch = useDispatch();
  const date = useDate();
  const daysUserAte = useSelector(daysOfEatenProducts);
  const dayId = daysUserAte && daysUserAte.find(el => el.date === date)._id ||daysUserAte.find(el => el.date === date).id ;

  let products = daysUserAte ? daysUserAte && daysUserAte?.find(el => el.date === date)?.eatenProducts : [];


  const navigate = useNavigate();
  const location = useLocation();
  const prevPageLocation = location.state?.prevPageLocation || '/';

  const [isShowed, changeShowed] = useState(false);
  const bodyEl = document.querySelector('body');


  useEffect(() => {
    dispatch(fetchUserInfo())
    dispatch(fetchDayInfo(date))
  }, [dispatch, date])
  
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
  };
 
  return (
    <>
      <DiaryDateCalendar />

      <div className={styles.hideForm}>
        <DiaryAddProductForm />
      </div>

      <DiaryProductsList diary={products} removeProduct={onRemoveProduct}/>
      <AddButton type="button" onClick={openModal} />
      {isShowed && <DiaryMobileMenu onClick={closeModal} type="button" />}
      {!isShowed && <BackBtn className={styles.BackBtn} onClick={goBack} />}
    </>
  );
}
export default Diary;
