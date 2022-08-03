import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDiaryState } from "redux/diary/diary-selectors";
import DiaryAddProductForm from "modules/Diary/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductsList from "./DiaryProductsList";
import { ReactComponent as AddBtn } from "../../images/add.svg";
import Button from '../../shared/components/Button';

import styles from "./diary.module.css";

import initialList from "./initialList";
import useAuthState from "shared/hooks/useAuthState";
import useDate from "shared/hooks/useDate";

function Diary() {
    const dispatch = useDispatch();

    

    const data = useDate();
    const { user: { days } } = useAuthState();

    const {product} = useSelector(getDiaryState)

    // let eatenProdactsOnDate = product?.day.eatenProducts
    // const dateInDiary = product?.day.date
  
    let eatenProductsByUser = days.find(({ date }) => date === data).eatenProducts;

    console.log("eatenProductsByUser", eatenProductsByUser);
    // console.log("eatenProdactsOnDate", eatenProdactsOnDate);


//     let elements =eatenProductsByUser;
//     if ((data === dateInDiary) && (eatenProdactsOnDate.length > eatenProductsByUser)) {
//     return elements = eatenProdactsOnDate
// }
    return (
        <>
            <DiaryDateCalendar />
            <DiaryAddProductForm />
            <DiaryProductsList diary={eatenProductsByUser} />
            <Button className={styles.btnOutline} type={'button'} >
                <AddBtn className={styles.AddBtn} />
            </Button>
        </>
    )
 };
export default Diary;