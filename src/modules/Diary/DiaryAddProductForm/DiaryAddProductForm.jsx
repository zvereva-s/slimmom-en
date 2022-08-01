import useForm from "../../../shared/hooks/useForm";
import TextField from "../../../shared/components/TextField";

import { initialState } from "./initialState";
import { fields } from "./fields";

const DiaryAddProductForm = ({ onSubmit }) => {
    
    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });
    const { productName, grams } = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={productName} {...fields.productName} />
            <TextField onChange={handleChange} value={grams} {...fields.grams} />
            <button type="submit">Add</button>
        </form>
    )
}

export default DiaryAddProductForm;