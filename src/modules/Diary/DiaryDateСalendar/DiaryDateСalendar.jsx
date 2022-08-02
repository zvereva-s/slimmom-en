import { useState } from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import styles from './diary-date-calendar.module.css'


function DiaryDateCalendar() {
    const [startDate, setStartDate] = useState(new Date());

    const date = startDate.toLocaleDateString().replaceAll('.', '-').split('-').reverse().join("-");

  return (
      <DatePicker
      dateFormat="dd.MM.yyyy"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};;
export default DiaryDateCalendar;