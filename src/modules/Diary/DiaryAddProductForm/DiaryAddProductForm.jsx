import useForm from "../../../shared/hooks/useForm";
import TextField from "../../../shared/components/TextField";

import Button from "../../../shared/components/Button/Button";

import { initialState } from "./initialState";
import { fields } from "./fields";

import btnStyles from '../../../shared/styles/buttons.module.css'

const DiaryAddProductForm = ({ onSubmit }) => {
    
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });
    const { productName, grams } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={productName} {...fields.productName} />
            <TextField onChange={handleChange} value={grams} {...fields.grams} />
            <Button className={btnStyles.add} type="submit" text="Add" />
        </form>
    )
}

export default DiaryAddProductForm;