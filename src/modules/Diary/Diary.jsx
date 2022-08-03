import DiaryAddProductForm from "modules/Diary/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductsList from "./DiaryProductsList";
import { ReactComponent as AddBtn } from "../../images/add.svg";

import styles from "./diary.module.css";

import initialList from "./initialList";

function Diary() {

    const removeProduct = () => {}
    return (
        <>
            <DiaryDateCalendar />
            <DiaryAddProductForm />
            <DiaryProductsList diary={initialList} />
            <div className={styles.btnOutline}>
            <AddBtn className={styles.AddBtn} />

            </div>
        </>
    )
 };
export default Diary;