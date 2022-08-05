import PropTypes from 'prop-types';
import styles from './summaryList.module.css';

function SummaryList({ items }) {
    const { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate } = items;
    const kcalLeftFixed = kcalLeft.toFixed(0);
    const kcalConsumedFixed = kcalConsumed.toFixed(0);
    const dailyRateFixed = dailyRate.toFixed(0);
    const percentsOfDailyRateFixed = percentsOfDailyRate.toFixed(0)

    return (
        <ul className={styles.list}>
            <li className={styles.item}>
                <p className={styles[`itemtitle`]}>Left</p>
                <p className={styles[`item-total`]}>{kcalLeftFixed} kcal</p>
            </li>
            <li className={styles.item}>
                <p className={styles[`itemtitle`]}>Consumed</p>
                <p className={styles[`item-total`]}>{kcalConsumedFixed} kcal</p>
            </li>
            <li className={styles.item}>
                <p className={styles[`itemtitle`]}>Daily rate</p>
                <p className={styles[`item-total`]}>{dailyRateFixed} kcal</p>
            </li>
            <li className={styles.item}>
                <p className={styles[`itemtitle`]}>n% of normal</p>
                <p className={styles[`item-total`]}>{percentsOfDailyRateFixed} kcal</p>
            </li>
       </ul>
    )
}

export default SummaryList;


SummaryList.defaultProps = {
    kcalLeft: 0,
    kcalConsumed: 0,
    dailyRate: 0,
    percentsOfDailyRate: 0,
}
SummaryList.propTypes = {
    kcalLeft: PropTypes.number,
    kcalConsumed: PropTypes.number,
    dailyRate: PropTypes.number,
    percentsOfDailyRate: PropTypes.number,
}