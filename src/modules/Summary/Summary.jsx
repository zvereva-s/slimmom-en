import { useSelector } from 'react-redux';

import useDate from 'shared/hooks/useDate';

import { getNotAllowedProducts } from 'redux/auth/auth-selectors';
import { daysOfEatenProducts } from 'redux/userAte/userAte-selectors';

import SummaryList from './SummaryList';
import FoodNotRecommended from '../FoodNotRecommended';

import styles from './summary.module.css';

function Summary() {
  const date = useDate();

  const daysUserAte = useSelector(daysOfEatenProducts);
  const notAllowProducts = useSelector(getNotAllowedProducts);

  let products = daysUserAte
    ? daysUserAte && daysUserAte?.find(el => el.date === date)?.daySummary
    : [];
  let eatenProducts = daysUserAte
    ? daysUserAte && daysUserAte?.find(el => el.date === date)?.eatenProducts
    : [];

  const elements = notAllowProducts.map((el, idx) => <li key={idx}>{el}</li>);

  return (
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>
          Summary for {date.replaceAll('-', '/')}{' '}
        </h3>

        {products && eatenProducts.length > 0 ? (
          <SummaryList items={products} />
        ) : (
          <p>
            You don't have a summary for the day. Please add products, which
            have been eaten.
          </p>
        )}
      </div>
      <FoodNotRecommended elements={elements} />
    </div>
  );
}

export default Summary;

// Summary.defaultProps = {
//     items: [],
// }
