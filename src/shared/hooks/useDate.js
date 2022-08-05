import { useSelector } from 'react-redux';
import { dateUserAte } from 'redux/userAte/userAte-selectors';

function useDate() {
  const date = useSelector(dateUserAte);
  return date;
}

export default useDate;
