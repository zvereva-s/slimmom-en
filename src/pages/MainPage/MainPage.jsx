import Home from 'modules/Home';
import banana from '../../images/desktop/banana.png';
import strawberry from '../../images/desktop/strawberry.png';
import layer from '../../images/desktop/layer-2.png';
import vector from '../../images/desktop/vector.png';

import tabletBanana from '../../images/tablet/banana.png';
import tabletStrawberry from '../../images/tablet/strawberry.png';
import tabletLayer from '../../images/tablet/layer-2.png';
import tablenVector from '../../images/tablet/vector.png';

import styles from './mainPage.module.css';

function MainPage() {
  return (
    <main>
      <div className={styles.wrapper}>
        <div className="container">
            <div className={styles.section}>
            <h1 className={styles.title}>
                Calculate your daily calorie intake right now
            </h1>
            <Home />
            </div>
        </div>
        <img
          src={vector}
          className={styles.vector}
          alt="vector"
        />
        <img
          src={strawberry}
          className={styles.strawberry}
          alt="strawberry"
        />
        <img
          src={banana}
          className={styles.banana}
          alt="banana"
        />
        <img
          src={layer}
          className={styles.layer}
          alt="layer"
        />
        
        <img
          src={tablenVector}
          className={styles.tablenVector}
          alt="tablenVector"
        />
        <img
          src={tabletStrawberry}
          className={styles.tabletStrawberry}
          alt="tabletStrawberry"
        />
        <img
          src={tabletBanana}
          className={styles.tabletBanana}
          alt="tabletBanana"
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
export default MainPage;

