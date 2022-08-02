import useForm from "../../../shared/hooks/useForm";
import TextField from "../../../shared/components/TextField";

import { initialState } from "./initialState";
import { fields } from "./fields";
import Button from "shared/components/Button/Button";

import styles from './calculate-form.module.css'

const CalculatorForm = ({onSubmit}) => {

    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });
    const {height, age, currentWeight, desiredWeight} = state
    

    return (
            <form onSubmit={handleSubmit}>
            <TextField onChange={handleChange} value={height} {...fields.height} />
            <TextField onChange={handleChange} value={age} {...fields.age} />
            <TextField onChange={handleChange} value={currentWeight} {...fields.currentWeight} />
            <TextField onChange={handleChange} value={desiredWeight} {...fields.desiredWeight} />
            <div className={styles.wrap}>
                <p className={styles.text} >Blood type *</p>
            <label className={styles.label} htmlFor="1">
                <input className={styles.input} id="1" type="radio" name="bloodType" value='1' /><span className={styles.span}>1</span>
            </label>
            <label className={styles.label} htmlFor="2">
                <input className={styles.input} id="2" type="radio" name="bloodType" value='2' /><span className={styles.span}>2</span>
            </label>
            <label className={styles.label} htmlFor="3">
                <input className={styles.input} id="3" type="radio" name="bloodType" value='3' /><span className={styles.span}>3</span>
            </label>
            <label className={styles.label} htmlFor="4">
                <input className={styles.input} id="4" type="radio" name="bloodType" value='4' /><span className={styles.span}>4</span>
            </label>
            </div>
            <Button text='Start losing weight' type='submit'/>
        </form>
    )
 }

export default CalculatorForm;