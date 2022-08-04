import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { getDayInfo } from 'redux/diary/diary-operations';

import { getDiaryState } from 'redux/diary/diary-selectors';

import { convertDate, dateRevers } from 'services/utils/utils';


function DiaryDateCalendar() {

  const { dateInfo } = useSelector(getDiaryState);

  const dispatch = useDispatch();
  
  function onGetDateInfo(date) {
    const newDate = dateRevers(date)
   
    dispatch(getDayInfo(newDate));
  }

  return (
    <DatePicker
      dateFormat="dd.MM.yyyy"
      selected={convertDate(dateInfo.date)}
      onChange={date => onGetDateInfo(date)}
    />
  );
}

export default DiaryDateCalendar;
