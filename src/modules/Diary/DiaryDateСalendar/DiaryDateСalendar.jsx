import { useDispatch} from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import useDate from 'shared/hooks/useDate';

import { fetchDayInfo } from 'redux/userAte/userAte-operations';
import { convertDate, dateRevers } from 'services/utils/utils';

function DiaryDateCalendar() {

  const dateUser = useDate();
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
