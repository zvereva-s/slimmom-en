import { useSelector } from "react-redux";
import { getDiaryState } from 'redux/diary/diary-selectors';
import {getNotAllowedProducts} from 'redux/auth/auth-selectors'
import { dateUserAte, daysOfEatenProducts } from 'redux/userAte/userAte-selectors';

import SummaryList from "./SummaryList";

import styles from './summary.module.css';

function Summary() { 

    const { dateInfo } = useSelector(getDiaryState);

    const date = useSelector(dateUserAte);
    const days = useSelector(daysOfEatenProducts);
    const notAllowProducts = useSelector(getNotAllowedProducts);

    console.log('days', days);
    console.log(' date',date);

    let items = [];
    if (days) {
        items = days.find(el => el.date === date).daySummary;
    }
    console.log('notAllowProducts', notAllowProducts)

    const elements = notAllowProducts.slice(0, 4).map((el, idx) => <li key={idx}>{el}</li>);

    return (
        <div className={styles.wrapper}>
            <div>
                <h3 className={styles.title}>Summary for {date.replaceAll('-', '/')} </h3>
                <SummaryList items={items} />
            </div>
            <div>
                <h3 className={styles.title}>Food not recommended</h3>
                <ul>{elements}</ul>
            </div>
        </div>
    )
};

export default Summary;

// Summary.defaultProps = {
//     items: [],
// }