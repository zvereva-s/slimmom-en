import SummaryList from "./SummaryList";

import styles from './summary.module.css';

function Summary() { 

    const date = '02/08/2022';
    const items = [];
    const elements = [].map(el => <li></li>);

    return (
        <div className={styles.wrapper}>
            <h3 className={styles.title}>Summary for {date}</h3>
            <SummaryList items={items} />
            <h3 className={styles.title}>Food not recommended</h3>
            <ul>{elements}</ul>
        </div>
    )
};
export default Summary;