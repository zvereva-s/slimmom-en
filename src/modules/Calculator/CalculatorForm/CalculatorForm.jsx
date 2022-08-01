import useForm from "../../../shared/hooks/useForm";
import TextField from "../../../shared/components/TextField";

import { initialState } from "./initialState";
import { fields } from "./fields";

const CalculatorForm = ({onSubmit}) => {

    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });
    const {height, age, currentWeight, desiredWeight, blood} = state


    return (
        <form onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={height} {...fields.height} />
            <TextField onChange={handleChange} value={age} {...fields.age} />
            <TextField onChange={handleChange} value={currentWeight} {...fields.currentWeight} />
            <TextField onChange={handleChange} value={desiredWeight} {...fields.desiredWeight} />
            <TextField {...fields.blood} />
            <label htmlFor="1">1
                <input id="1" type="radio" name="bloodType" value='1' />
            </label>
            <label htmlFor="2">2
                <input id="2" type="radio" name="bloodType" value='2' />
            </label>
            <label htmlFor="3">3
                <input id="3" type="radio" name="bloodType" value='3' />
            </label>
            <label htmlFor="4">4
                <input id="4" type="radio" name="bloodType" value='4' />
            </label>
            <div>
                <button type="submit">Start losing weight</button>
            </div>
        </form>
    )
 }

export default CalculatorForm;