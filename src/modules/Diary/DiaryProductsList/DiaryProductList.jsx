import PropTypes from 'prop-types';

import DiaryProductsListItem from './DiaryProductsListItem';

function DiaryProductList({ diary, removeProduct }) {
    const diaryElement = diary.map(({ id, product, grams, kcal }) => (
        <DiaryProductsListItem
            key={id}
            removeProduct={removeProduct}
            product={product}
            prams={grams}
            kcal={kcal}
        />
    )) 

    return (
        <ul>{diaryElement}</ul>
    )
 };

DiaryProductList.defaultProps = {
    diary: [],
    removeProduct: ()=>{},
}

DiaryProductList.propTypes = {
    removeProduct: PropTypes.func,
    diary: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            product: PropTypes.string.isRequired,
            grams: PropTypes.string.isRequired,
            kcal: PropTypes.string.isRequired,
        })
    ),
}

export default DiaryProductList;