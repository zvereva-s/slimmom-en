// import PropTypes from 'prop-types';
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
      const bottom = Number((target.scrollHeight - target.scrollTop).toFixed(0)) === target.clientHeight;
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
            <div className={styles.q}></div>
    </div>
  );
}

    const style = diary.length === 4 ? '' : styles.q;

    return (
        <div className={styles.box}>
            <ul className={styles.list} onScroll={handleScroll}>{diaryElement}</ul>
            <div className={style}></div>
        </div>
        
    )
};


DiaryProductList.defaultProps = {
  diary: [],
  removeProduct: () => {},
};

// DiaryProductList.propTypes = {
//     removeProduct: PropTypes.func,
//     diary: PropTypes.objectOf(
//         PropTypes.shape({
//             _id: PropTypes.string.isRequired,
//             product: PropTypes.string.isRequired,
//             grams: PropTypes.string.isRequired,
//             kcal: PropTypes.string.isRequired,
//         })
//     ),
// }

export default DiaryProductList;
