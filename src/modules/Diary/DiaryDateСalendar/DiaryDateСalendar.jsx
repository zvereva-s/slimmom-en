import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';


import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


import { getDayInfo, searchProductInfo, addDayProduct, removeEatenProduct } from 'redux/diary/diary-operations';
import { getDiaryState } from 'redux/diary/diary-selectors';


function DiaryDateCalendar() {
    const [startDate, setStartDate] = useState(new Date());

    const date = startDate.toLocaleDateString().replaceAll('.', '-').split('-').reverse().join("-");
    const dispatch = useDispatch();
    const diary = useSelector(getDiaryState);

    function onGetDateInfo() {
        dispatch(getDayInfo());
    }

  return (
      <DatePicker
      dateFormat="dd.MM.yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};;

export default DiaryDateCalendar;