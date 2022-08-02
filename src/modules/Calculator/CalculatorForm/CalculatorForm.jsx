import useForm from '../../../shared/hooks/useForm';
import TextField from '../../../shared/components/TextField';

import { initialState } from './initialState';
import { fields } from './fields';
import Button from 'shared/components/Button/Button';

import styles from './calculator-form.module.css';

const CalculatorForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit, setState } = useForm({
    onSubmit,
    initialState,
  });
  const { height, age, weight, desiredWeight } = state;


  const handleChangeRadio = ({ target }) => {
    const { value } = target;
    setState(prevState => ({
      ...prevState,
      bloodType: Number(value),
    }));
  };

    const { state, handleChange, handleSubmit } = useForm({ onSubmit, initialState });
    const { height, age, currentWeight, desiredWeight } = state;
    

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        onChange={handleChange}
        required
        value={height}
        {...fields.height}
      />
      <TextField onChange={handleChange} required value={age} {...fields.age} />
      <TextField
        onChange={handleChange}
        required
        value={weight}
        {...fields.weight}
      />
      <TextField
        onChange={handleChange}
        required
        value={desiredWeight}
        {...fields.desiredWeight}
      />
      <div className={styles.wrap}>
        <p className={styles.text}>Blood type *</p>
        <label className={styles.label} htmlFor="1">
          <input
            className={styles.input}
            id="1"
            type="radio"
            name="bloodType"
            value="1"
            onChange={handleChangeRadio}
          />
          <span className={styles.span}>1</span>
        </label>
        <label className={styles.label} htmlFor="2">
          <input
            className={styles.input}
            id="2"
            type="radio"
            name="bloodType"
            value="2"
            onChange={handleChangeRadio}
          />
          <span className={styles.span}>2</span>
        </label>
        <label className={styles.label} htmlFor="3">
          <input
            className={styles.input}
            id="3"
            type="radio"
            name="bloodType"
            value="3"
            onChange={handleChangeRadio}
          />
          <span className={styles.span}>3</span>
        </label>
        <label className={styles.label} htmlFor="4">
          <input
            className={styles.input}
            id="4"
            type="radio"
            name="bloodType"
            value="4"
            onChange={handleChangeRadio}
          />
          <span className={styles.span}>4</span>
        </label>
      </div>
      <Button className={styles.btn} text="Start losing weight" type="submit" />
    </form>
  );
};

export default CalculatorForm;
