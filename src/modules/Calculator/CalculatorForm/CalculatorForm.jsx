import useForm from '../../../shared/hooks/useForm';

import { initialState } from './initialState';
import { fields } from './fields';

import Button from 'shared/components/Button/Button';
import RadioField from 'shared/components/RadioField';
import TextField from '../../../shared/components/TextField';

import styles from './calculator-form.module.css';

function CalculatorForm({ onSubmit }) {
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

  return (
    <form onSubmit={handleSubmit}>
      <TextField onChange={handleChange} required value={height} {...fields.height}
      />
      <TextField onChange={handleChange} required value={age} {...fields.age} />
      <TextField onChange={handleChange} required value={weight}
        {...fields.weight}
      />
      <TextField onChange={handleChange} required value={desiredWeight} {...fields.desiredWeight}
      />
      <div className={styles.wrap}>
        <p className={styles.text}>Blood type *</p>
        <RadioField onChange={handleChangeRadio} {...fields.one} />
        <RadioField onChange={handleChangeRadio} {...fields.two} />
        <RadioField onChange={handleChangeRadio} {...fields.three} />
        <RadioField onChange={handleChangeRadio} {...fields.four} />
      </div>
      <Button className={styles.btn} text="Start losing weight" type="submit" />
    </form>
  );
}

export default CalculatorForm;
