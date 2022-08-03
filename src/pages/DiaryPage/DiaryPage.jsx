import Diary from 'modules/Diary';
import Summary from 'modules/Summary';
import layer from '../../images/desktop/layer-1.png';
import tabletLayer from '../../images/tablet/layer-1.png';

import styles from './diaryPage.module.css';

function DiaryPage() {
  return (
    <main>
      <div className={styles.wrapper} >
        <section className="section" >
          <div className={styles.leftSide} >
            <h1 className={styles.title}>Diary Page</h1>
            <Diary />
          </div>
        </section>
        <section className={styles.summarySection}>
          <div className={styles.rightSide}>
            <Summary />
          </div>
        </section>
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
export default DiaryPage;
