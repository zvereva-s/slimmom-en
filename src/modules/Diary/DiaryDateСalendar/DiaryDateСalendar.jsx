import { useState } from 'react';

import { useDispatch } from 'react-redux';

import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import {
  getDayInfo,
  searchProductInfo,
  addDayProduct,
  removeEatenProduct,
} from 'redux/diary/diary-operations';
import { getDiaryState } from 'redux/diary/diary-selectors';

function DiaryDateCalendar() {
  const [startDate, setStartDate] = useState(new Date());

  

  const dispatch = useDispatch();
  
  function onGetDateInfo(date) {
    setStartDate(date);
    
    const updDate = startDate
    .toLocaleDateString()
    .replaceAll('.', '-')
    .split('-')
    .reverse()
      .join('-');
    
    const obj = {
      date: updDate,
    }
    
    dispatch(getDayInfo(obj));
  }

  


  return (
    <DatePicker
      dateFormat="dd.MM.yyyy"
      selected={startDate}
      onChange={date => onGetDateInfo(date)}
      // onClick={()=>onGetDateInfo()}
    />
  );
}

export default DiaryDateCalendar;
