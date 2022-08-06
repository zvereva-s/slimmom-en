import PropTypes from 'prop-types';
import DiaryProductsListItem from './DiaryProductsListItem';

import styles from './diary-product-list.module.css';

function DiaryProductList({ diary, removeProduct }) {
  console.log('diary', diary);
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
      Number((target.scrollHeight - target.scrollTop).toFixed(0)) ===
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
      {diary.length > 4 && <div className={styles.q}></div>}
    </div>
  );
}

DiaryProductList.defaultProps = {
  diary: [],
  removeProduct: () => {},
};

DiaryProductList.propTypes = {
  removeProduct: PropTypes.func,
  diary: PropTypes.arrayOf(
    PropTypes.shape(
      PropTypes.object({
        id: PropTypes.string,
        product: PropTypes.string.isRequired,
        grams: PropTypes.string.isRequired,
        kcal: PropTypes.string.isRequired,
      })
    )
  ),
};

export default DiaryProductList;
