import Calculator from 'modules/Calculator';

import layer from '../../images/desktop/layer-1.png';
import tabletLayer from '../../images/tablet/layer-1.png';

import styles from './calculatorPage.module.css';

function CalculatorPage() {
  return (
    <main>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.section}>
            <h1 className={styles.title}>
              Calculate your daily calorie intake right now
            </h1>
            <Calculator />
          </div>
        </div>
        <img
          src={layer}
          className={styles.layer}
          alt="layer"
        />
        <img
          src={tabletLayer}
          className={styles.tabletLayer}
          alt="tabletLayer"
        />
      </div>
    </main>
  );
}
export default CalculatorPage;
