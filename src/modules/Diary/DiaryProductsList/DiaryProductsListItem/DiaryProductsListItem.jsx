import { memo } from 'react';

import PropTypes from 'prop-types';

import Button from 'shared/components/Button/Button';

import { ReactComponent as DeleteProduct } from '../../../../images/close.svg';

import styles from './diary-products-list-item.module.css';

function DiaryProductListItem({ product, grams, kcal, removeProduct, id }) {
  return (
    <li>
      <span className={styles.span}>{product}</span>
      <span className={styles.span}>{`${grams} g`}</span>
      <span className={styles.span}>{`${kcal} kcal`}</span>
      <Button type={'button'} onClick={() => removeProduct(id)}>
        <DeleteProduct />
      </Button>
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

DiaryProductListItem.propTypes = {
  product: PropTypes.string.isRequired,
  grams: PropTypes.string.isRequired,
  kcal: PropTypes.string.isRequired,
  removeProduct: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default memo(DiaryProductListItem);
