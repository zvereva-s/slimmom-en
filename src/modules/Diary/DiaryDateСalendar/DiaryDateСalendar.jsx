import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function DiaryDateCalendar() { 
    const [value, onChange] = useState(new Date());

    console.log(value)
    

    return (
    <div>
            <Calendar onChange={onChange} value={value} calendarType="ISO 8601" />
    </div>
    )
};
export default DiaryDateCalendar;