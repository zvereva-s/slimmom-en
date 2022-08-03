import { useDispatch } from "react-redux";

import { addDayProduct } from 'redux/diary/diary-operations';

import DiaryAddProductForm from "modules/Diary/DiaryAddProductForm";
import DiaryDateCalendar from "./DiaryDateСalendar";


 

function Diary() {
    const dispatch = useDispatch();

    const removeProduct = () => { }
    
    const onAddProduct = (product) => {
        dispatch(addDayProduct)
     };

    return (
        <>
            <DiaryDateCalendar />
            <DiaryAddProductForm onSubmit={onAddProduct} />
        </>
    )
 };
export default Diary;