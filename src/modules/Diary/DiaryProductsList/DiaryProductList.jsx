import PropTypes from 'prop-types';
import DiaryProductsListItem from './DiaryProductsListItem';

import styles from './diary-product-list.module.css';

function DiaryProductList({ diary, removeProduct }) {
  const diaryElement = diary.map(({ id, title, weight, kcal }) => {
    const updKcal = kcal.toFixed(0);
    return (
      <DiaryProductsListItem
        key={id}
        removeProduct={removeProduct}
        product={title}
        grams={weight}
        id={id}
        kcal={updKcal}
      />
    );
  });

  const handleScroll = ({ target }) => {
    const bottom =
      Math.round((target.scrollHeight - target.scrollTop)) ===
      target.clientHeight || Math.round((target.scrollHeight - target.scrollTop)) -1 ===
      target.clientHeight;
    if (!bottom) {
      target.nextSibling.style.zIndex = '1';
    } else {
      target.nextSibling.style.zIndex = '-1';
    }
  };

  return (
    <div className={styles.box}>
      <ul className={styles.list} onScroll={handleScroll}>
        {diaryElement}
      </ul>
      {diary.length > 6 && <div className={styles.q}></div>}
    </div>
  );
}

DiaryProductList.defaultProps = {
  diary: [],
  removeProduct: () => {},
};

DiaryProductList.propTypes = {
  removeProduct: PropTypes.func.isRequired,
  diary: PropTypes.array.isRequired,
}


export default DiaryProductList;
