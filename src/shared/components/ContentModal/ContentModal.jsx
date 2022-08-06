import PropTypes from 'prop-types';

import styles from './content-modal.module.css'

function ContentModal({ calories, renderArr }) {
  return (<>
    <h2 className={styles.modal__title}>
      Your recommended daily calorie intake is
    </h2>
    <p className={styles.modal__calories}>
      {calories} <span className={styles.ccal}>ккал</span>
    </p>
    <p className={styles.modal__listTitle}>Foods you should not eat</p>
    <ol className={styles.modal__list}>{renderArr}</ol>
  </>);
}

export default ContentModal;

ContentModal.defaultProps = {
    calories: 0,
    renderArr: [],
}

ContentModal.propTypes = {
    calories: PropTypes.number,
    renderArr: PropTypes.array,
}