import { useSelector } from "react-redux";

import useDate from "shared/hooks/useDate";

import DiaryAddProductForm from "modules/Diary/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductsList from "./DiaryProductsList";
import Button from '../../shared/components/Button';

import { ReactComponent as AddBtn } from "../../images/add.svg";
import styles from "./diary.module.css";

import initialList from "./initialList";
function Diary() {
    

    const data = useDate();
 

    
    return (
        <>
            <DiaryDateCalendar />
            <DiaryAddProductForm />
            <DiaryProductsList diary={initialList} />
            <Button className={styles.btnOutline} type={'button'} >
                <AddBtn className={styles.AddBtn} />
            </Button>
        </>
    )
 };
export default Diary;