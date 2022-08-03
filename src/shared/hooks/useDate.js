import { useSelector } from 'react-redux';
import { getDiaryState } from 'redux/diary/diary-selectors';

function useDate() {
  const { dateInfo } = useSelector(getDiaryState);
  return dateInfo.date;
}

export default useDate;
