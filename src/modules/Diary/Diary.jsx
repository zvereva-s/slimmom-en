import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import useDate from 'shared/hooks/useDate';


import { useState} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { removeEatenProduct } from "redux/diary/diary-operations";

import { getDiaryState } from 'redux/diary/diary-selectors';
import { removeEatenProduct } from 'redux/diary/diary-operations';
import { getDayInfo } from 'redux/diary/diary-operations';
import { startDay } from 'redux/diary/diary-selectors';


import { diaryDayLast, diaryDayEatenProducts } from 'redux/diary/diary-selectors';
import { eatenProductsUser } from 'redux/auth/auth-selectors';


import useDate from "shared/hooks/useDate";
import AddButton from "shared/components/Button/MobileAddButton";

import DiaryAddProductForm from "modules/Diary/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductsList from "./DiaryProductsList";
import DiaryMobileMenu from "./DiaryMobileMenu";


import { ReactComponent as BackBtn } from "images/back.svg";
import styles from "./diary.module.css";
=======
import {
  diaryDay,
  diaryDayLast,
  diaryDayEatenProducts,
} from 'redux/diary/diary-selectors';

import DiaryAddProductForm from 'modules/Diary/DiaryAddProductForm';
import DiaryDateCalendar from './DiaryDateСalendar';
import DiaryProductsList from './DiaryProductsList';
import DiaryMobileMenu from './DiaryMobileMenu';

import Button from '../../shared/components/Button';
import AddButton from 'shared/components/Button/MobileAddButton';

import { ReactComponent as AddBtn } from '../../images/add.svg';
import { ReactComponent as BackBtn } from 'images/back.svg';
import styles from './diary.module.css';

function Diary() {
  const date = useSelector(startDay);
  const [isShowed, changeShowed] = useState(false);
  const bodyEl = document.querySelector('body');

  const dispatch = useDispatch();

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

  const navigate = useNavigate();
  const location = useLocation();
  const prevPageLocation = location.state?.prevPageLocation || '/';
  const goBack = () => navigate(prevPageLocation);

  const data = useDate();

  const onRemoveProduct = id => {
    dispatch(removeEatenProduct(id));
  };

  const currentData = useDate();
  const lastDay = useSelector(diaryDayLast);

  const listEatenProductsUserDays = useSelector(eatenProductsUser);
  const listEatenProductsDiary = useSelector(diaryDayEatenProducts);


    const navigate = useNavigate();
    const location = useLocation();
    const prevPageLocation = location.state?.prevPageLocation || "/";
    const goBack = () => navigate(prevPageLocation);  

  const listEatenProductsUser = listEatenProductsUserDays
    ? listEatenProductsUserDays.find(el => el.date === currentData)
        ?.eatenProducts
    : [];

  let elements = listEatenProductsUser;

  if (listEatenProductsDiary && currentData === lastDay) {
    elements = listEatenProductsDiary;
  }


  useEffect(() => {
    dispatch(getDayInfo(date));
  }, []);
  return (
    <>
      <DiaryDateCalendar />

      <div className={styles.hideForm}>
        <DiaryAddProductForm />
      </div>
      <DiaryProductsList diary={elements} removeProduct={onRemoveProduct} />
      <AddButton onClick={openModal} />
      {isShowed && <DiaryMobileMenu onClick={closeModal} type="button" />}
      {!isShowed && <BackBtn className={styles.BackBtn} onClick={goBack} />}
    </>
  );
}
export default Diary;



