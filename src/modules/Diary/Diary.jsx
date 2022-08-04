

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import useDate from "shared/hooks/useDate";

import { getDiaryState } from "redux/diary/diary-selectors";

import DiaryAddProductForm from "modules/Diary/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductsList from "./DiaryProductsList";
import DiaryMobileMenu from "./DiaryMobileMenu";

import Button from '../../shared/components/Button';
import AddButton from "shared/components/Button/MobileAddButton";

import initialList from "./initialList";

import { ReactComponent as AddBtn } from "../../images/add.svg";
import { ReactComponent as BackBtn } from "images/back.svg";
import styles from "./diary.module.css";


function Diary() {
    const [isShowed, changeShowed] = useState(false);
    const bodyEl = document.querySelector("body");    

    const openModal = () => {
        changeShowed(true);
        window.scrollTo(0, 0)
        bodyEl.classList.add('stop-scrolling')
    };

    const closeModal = () => {
        changeShowed(false);
        bodyEl.classList.remove('stop-scrolling')
    };

    window.addEventListener('resize', () => {
        let width = window.innerWidth;
        if (width > "768") {
            changeShowed(false)
        }
    });

    const navigate = useNavigate();
    const location = useLocation();
    const prevPageLocation = location.state?.prevPageLocation || "/";
    const goBack = () => navigate(prevPageLocation);  

    const data = useDate();
 

    
    return (
        <>
            <DiaryDateCalendar />
            <DiaryAddProductForm />
            <DiaryProductsList diary={initialList} />
            <AddButton onClick={openModal} />
            {isShowed && <DiaryMobileMenu onClick={closeModal} />}
            {!isShowed && <BackBtn className={styles.BackBtn} onClick={goBack} />}
        </>
    )
 };
export default Diary;