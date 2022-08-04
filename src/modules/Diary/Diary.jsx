// import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getDiaryState } from "redux/diary/diary-selectors";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { ReactComponent as BackBtn } from "images/back.svg";
import DiaryAddProductForm from "modules/Diary/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductsList from "./DiaryProductsList";
import AddButton from "shared/components/Button/MobileAddButton";
import DiaryMobileMenu from "./DiaryMobileMenu";

import styles from "./diary.module.css";

import initialList from "./initialList";
import useAuthState from "shared/hooks/useAuthState";
import useDate from "shared/hooks/useDate";

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
    const { user: { days } } = useAuthState();

    // const {product} = useSelector(getDiaryState)

    // let eatenProdactsOnDate = product?.day.eatenProducts
    // const dateInDiary = product?.day.date
  
    // let eatenProductsByUser = days.find(({ date }) => date === data).eatenProducts;

    // console.log("eatenProductsByUser", eatenProductsByUser);
    // console.log("eatenProdactsOnDate", eatenProdactsOnDate);


//     let elements =eatenProductsByUser;
//     if ((data === dateInDiary) && (eatenProdactsOnDate.length > eatenProductsByUser)) {
//     return elements = eatenProdactsOnDate
// }
    
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