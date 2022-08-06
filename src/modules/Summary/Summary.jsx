import { useSelector } from "react-redux";

import useDate from "shared/hooks/useDate";

import {getNotAllowedProducts} from 'redux/auth/auth-selectors'
import { daysOfEatenProducts } from 'redux/userAte/userAte-selectors';

import SummaryList from "./SummaryList";
import FoodNotRecommended from '../FoodNotRecommended';

import styles from './summary.module.css';

function Summary() { 

    const date = useDate();
    const days = useSelector(daysOfEatenProducts);
    const notAllowProducts = useSelector(getNotAllowedProducts);
    console.log('days', days)
    const items = days && (days.find(el => el.date === date)?.daySummary ? days.find(el => el.date === date)?.daySummary : []);
    console.log('items', items)

    const elements = notAllowProducts.map((el, idx) => <li key={idx}>{el}</li>);

    return (
        <div className={styles.wrapper}>
            <div>
                <h3 className={styles.title}>Summary for {date.replaceAll('-', '/')} </h3>
                <SummaryList items={items} />
            </div>
            <FoodNotRecommended elements={elements} />
        </div>
    )
};

export default Summary;

// Summary.defaultProps = {
//     items: [],
// }