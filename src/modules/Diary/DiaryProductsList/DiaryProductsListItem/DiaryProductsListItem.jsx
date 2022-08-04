import { memo } from 'react';

import PropTypes from 'prop-types';

import { ReactComponent as DeleteProduct } from '../../../../images/close.svg';

import styles from './diary-products-list-item.module.css';

function DiaryProductListItem({ product, grams, kcal, removeProduct, id }) {
  return (
    <li className={styles.item}>
      <span className={styles.span}>{product}</span>
      <span className={styles.span}>{`${grams} g`}</span>
      <span className={styles.span}>{kcal} <span className={styles.kcal}>kcal</span></span>
        <DeleteProduct className={styles.deleteBtn} onClick={() => removeProduct(id)} />
    </li>
  );
}

DiaryProductListItem.defaultProps = {
  product: '',
  grams: '',
  kcal: '',
  removeProduct: () => {},
  id: '',
};

// DiaryProductListItem.propTypes = {
//   product: PropTypes.string.isRequired,
//   grams: PropTypes.string.isRequired,
//   kcal: PropTypes.string.isRequired,
//   removeProduct: PropTypes.func.isRequired,
//   _id: PropTypes.string.isRequired,
// };

export default memo(DiaryProductListItem);
