import { useDispatch } from "react-redux";

import { addDayProduct } from 'redux/diary/diary-operations';

import DiaryAddProductForm from "modules/Diary/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductsList from "./DiaryProductsList";
import { ReactComponent as AddBtn } from "../../images/add.svg";
import Button from '../../shared/components/Button';

import styles from "./diary.module.css";

import initialList from "./initialList";

function Diary() {
    const dispatch = useDispatch();

    const removeProduct = () => { };
   

    return (
        <>
            <DiaryDateCalendar />

            <DiaryAddProductForm />
            <DiaryProductsList diary={initialList} />
            <Button className={styles.btnOutline} type={'button'} onClick={removeProduct} >
                <AddBtn className={styles.AddBtn} />
            </Button>
        </>
    )
 };
export default Diary;