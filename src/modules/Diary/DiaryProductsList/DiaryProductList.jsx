// import PropTypes from 'prop-types';

import DiaryProductsListItem from './DiaryProductsListItem';

import styles from "./diary-product-list.module.css";

function DiaryProductList({ diary, removeProduct }) {
    const diaryElement = diary.map(({ id, title, weight, kcal }) => (
        <DiaryProductsListItem
            key={id}
            removeProduct={removeProduct}
            product={title}
            grams={weight}

            id={id}

            kcal={kcal}
        />
    )) 

    return (
        <ul className={styles.list}>{diaryElement}</ul>
    )
};

DiaryProductList.defaultProps = {
    diary: [],
    removeProduct: ()=>{},
}

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