import { useState } from 'react';
// import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import styles from './diary-date-calendar.module.css'

function DiaryDateCalendar() { 
    const [value, onChange] = useState(new Date());

    console.log(value)

    return (
        
        <div>
            <input className={styles.input} type="date" />
            
            {/* <Calendar onChange={onChange} value={value} calendarType="ISO 8601" /> */}
            
        </div>
        
    )
};
export default DiaryDateCalendar;