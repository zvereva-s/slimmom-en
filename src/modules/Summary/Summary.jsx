import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getDiaryState } from 'redux/diary/diary-selectors';
import { getDailyInfo } from 'redux/daily/daily-selectors';

import SummaryList from "./SummaryList";

import styles from './summary.module.css';

function Summary() { 
    const { dateInfo, product } = useSelector(getDiaryState);
    const { notAllowedProducts } = useSelector(getDailyInfo);
    
    const getSummaryItems = () => {
        let obj = {
            kcalLeft: 0,
            kcalConsumed: 0,
            dailyRate: 0,
            percentsOfDailyRate: 0
        }

        if (product.daySummary) {
            return product.daySummary
        } else if (product.newSummary) {
            return product.newSummary
        } 
        
        return obj;
    }

    const summaryItems = product.daySummary;
    console.log(typeof(summaryItems));

    const items = getSummaryItems();

    const elements = notAllowedProducts.length ? notAllowedProducts.map(el => <span>{el}{", "}</span>) : [];

    return (
        <div className={styles.wrapper}>
            <div>
                <h3 className={styles.title}>Summary for {dateInfo.date.replaceAll('-', '/')} </h3>
                <SummaryList items={items} />
            </div>
            <div>
                <h3 className={styles.title}>Food not recommended</h3>
                <div className={styles.footerFood} >{elements}</div>
            </div>
        </div>
    )
};

export default Summary;

// Summary.defaultProps = {
//     items: [],
// }