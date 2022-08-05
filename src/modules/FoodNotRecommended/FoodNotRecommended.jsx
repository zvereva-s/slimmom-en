import styles from './foodNotRecommended.module.css';

function FoodNotRecommended({ elements }) {
  return (
    <div className={styles.wrapper}>
          <h3 className={styles.title}>Food not recommended</h3>
          
            <ul className={styles.list}>{elements}</ul>
    </div>
  );
}
export default FoodNotRecommended;
