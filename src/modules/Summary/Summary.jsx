import { useSelector } from "react-redux";
import { getDiaryState } from 'redux/diary/diary-selectors';

import SummaryList from "./SummaryList";

import styles from './summary.module.css';

function Summary() { 

    const { dateInfo } = useSelector(getDiaryState);


    const items = dateInfo.response ? dateInfo.response : [];

    const elements = [].map(el => <li></li>);

    return (
        <div className={styles.wrapper}>
            <div>
                <h3 className={styles.title}>Summary for {dateInfo.date.replaceAll('-', '/')} </h3>
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