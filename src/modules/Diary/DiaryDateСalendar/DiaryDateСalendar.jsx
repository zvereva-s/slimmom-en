import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getDayInfo, searchProductInfo, addDayProduct, removeEatenProduct } from 'redux/diary/diary-operations';
import { getDiaryState } from 'redux/diary/diary-selectors';




function DiaryDateCalendar() {
    const dispatch = useDispatch();
    const diary = useSelector(getDiaryState);

    const dateTest = {
        date: '2022-02-02',
    }

    function onGetDateInfo(dateTest) {
        dispatch(getDayInfo(dateTest));
    }


    return (
        <>
            <h1 onClick={()=>onGetDateInfo(dateTest)}>02-02-2022</h1>
        </>
    )
 };
export default DiaryDateCalendar;