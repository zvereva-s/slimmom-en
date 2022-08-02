import DiaryAddProductForm from "modules/Diary/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductList from "./DiaryProductsList";


 

function Diary() {

    const removeProduct = () => {}
    return (
        <>
            <DiaryDateCalendar />
            <DiaryAddProductForm />
            {/* <DiaryProductList /> */}
        </>
    )
 };
export default Diary;