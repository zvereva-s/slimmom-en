import { memo } from 'react'

import PropTypes from "prop-types";

import Button from 'shared/components/Button/Button';


 
function DiaryProductListItem({ product, grams, kcal, removeProduct, id }) { 
    return (
        <li><span>{product}</span><span>{`${grams} g`}</span><span>{`${kcal} kcal`}</span>
        <Button type={'button'} onClick={()=> removeProduct(id)}>X</Button>
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


export default memo(DiaryProductListItem);

