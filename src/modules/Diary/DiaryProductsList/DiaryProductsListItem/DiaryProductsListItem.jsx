import { memo } from 'react'

import PropTypes from "prop-types";


 
function DiaryProductListItem({ product, grams, kcal, removeProduct, id }) { 
    return (
        <li><span>{product}</span><span>{grams}</span><span>{kcal}</span>
        <button onClick={()=> removeProduct(id)}>X</button>
        </li>
    )
};

DiaryProductListItem.defaultProps = {
    product: "",
    grams: "",
    kcal: "",
    removeProduct: () => { },
    id: "",
}


DiaryProductListItem.propTypes = {
    product: PropTypes.string.isRequired,
    grams: PropTypes.string.isRequired,
    kcal: PropTypes.string.isRequired,
    removeProduct: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}


export default DiaryProductListItem;

