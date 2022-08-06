import PropTypes from 'prop-types';

import banana from '../../../images/desktop/banana.png';
import strawberry from '../../../images/desktop/strawberry.png';
import layer from '../../../images/desktop/layer-2.png';
import vector from '../../../images/desktop/vector.png';

import tabletBanana from '../../../images/tablet/banana.png';
import tabletStrawberry from '../../../images/tablet/strawberry-lr.png';
import tabletLayer from '../../../images/tablet/layer-lr.png';
import tablenVector from '../../../images/tablet/vector.png';

import styles from './img-list.module.css';
import { TailSpin } from 'react-loader-spinner';

function ImgList({
  classNameVector,
  classNameStrawberry,
  classNameTablenVector,
  classNameTabletBanana,
  classNameTabletLayer,
}) {
  return (
    <>
      <img
        src={vector}
        className={`${styles.vector} ${classNameVector}`}
        alt="vector"
      />
      <img
        src={strawberry}
        className={`${styles.strawberry} ${classNameStrawberry}`}
        alt="strawberry"
      />
      <img src={banana} className={styles.banana} alt="banana" />
      <img src={layer} className={styles.layer} alt="layer" />

      <img
        src={tablenVector}
        className={`${styles.tablenVector} ${classNameTablenVector}`}
        alt="tablenVector"
      />
      <img
        src={tabletStrawberry}
        className={styles.tabletStrawberry}
        alt="tabletStrawberry"
      />
      <img
        src={tabletBanana}
        className={`${styles.tabletBanana}  ${classNameTabletBanana}`}
        alt="tabletBanana"
      />
      <img
        src={tabletLayer}
        className={`${styles.tabletLayer} ${classNameTabletLayer}`}
        alt="tabletLayer"
      />
    </>
  );
}

export default ImgList;

ImgList.propTypes = {
  classNameVector: PropTypes.string,
  classNameTablenVector: PropTypes.string,
  classNameStrawberry: PropTypes.string,
  classNameTabletBanana: PropTypes.string,
  classNameTabletLayer: PropTypes.string,
}