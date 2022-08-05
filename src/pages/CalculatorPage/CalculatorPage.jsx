import Calculator from 'modules/Calculator';
import Summary from 'modules/Summary';

import layer from '../../images/desktop/layer-1.png';
import tabletLayer from '../../images/tablet/layer-1.png';

import styles from './calculatorPage.module.css';

function CalculatorPage() {
  return (
    <main>
      <div className={styles.wrapper}>
        {/* <div className="container">
          <div className={styles.section}>
            <h1 className={styles.title}>
              Calculate your daily calorie intake right now
            </h1>
            <Calculator />
          </div> */}
        <section className={styles.section}>
          <div className={styles.leftSide}>
            <h1 className={styles.title}>
              Calculate your daily calorie intake right now
            </h1>
            <Calculator />
          </div>
        </section>
        <section className={styles.summarySection}>
          <div className={styles.rightSide}>
            <Summary />
          </div>
        </section>
        <img src={layer} className={styles.layer} alt="layer" />
      <img src={tabletLayer} className={styles.tabletLayer} alt="tabletLayer" />
      </div>
      
      {/* </div> */}
    </main>
  );
}
export default CalculatorPage;
