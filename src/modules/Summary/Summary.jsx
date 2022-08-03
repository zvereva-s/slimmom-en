import { useSelector } from "react-redux";
import { getDiaryState } from 'redux/diary/diary-selectors';

import SummaryList from "./SummaryList";

import styles from './summary.module.css';

function Summary() { 

    const dateDefault = '01-07-2022';
    let date = null;

    const { dateInfo } = useSelector(getDiaryState);

    if (!dateInfo.date) {
        date = dateDefault;
    } else {
        date = dateInfo.date.date;
    }

    const items = dateInfo.response ? dateInfo.response : [];

    const elements = [].map(el => <li></li>);

    return (
        <div className={styles.wrapper}>
            <div>
                <h3 className={styles.title}>Summary for {date} </h3>
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

Summary.defaultProps = {
    items: [],
}