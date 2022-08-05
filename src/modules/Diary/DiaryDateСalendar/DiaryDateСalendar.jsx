import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { convertDate, dateRevers } from 'services/utils/utils';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import {
  getDayInfo
} from 'redux/diary/diary-operations';

import { getDiaryState } from 'redux/diary/diary-selectors';

import { fetchDayInfo } from 'redux/userAte/userAte-operations';
import { dateUserAte } from 'redux/userAte/userAte-selectors';

function DiaryDateCalendar() {

  // const { dateInfo } = useSelector(getDiaryState);
  // const dispatch = useDispatch();

  // function onGetDateInfo(date) {
  //   const newDate = dateRevers(date)
  //   dispatch(getDayInfo(newDate));
  // }

  const dateUser = useSelector(dateUserAte);
  const dispatch = useDispatch();

  function onGetDateInfo(date) {
    const newDate = dateRevers(date);
    dispatch(fetchDayInfo(newDate))
  }

  return (
    <DatePicker
      dateFormat="dd.MM.yyyy"
      selected={convertDate(dateUser)}
      onChange={date => onGetDateInfo(date)}
    />
  );
}

export default DiaryDateCalendar;
