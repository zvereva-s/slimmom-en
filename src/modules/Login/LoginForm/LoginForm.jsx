import useForm from '../../../shared/hooks/useForm';
import TextField from '../../../shared/components/TextField';
import Button from 'shared/components/Button/Button';

import { initialState } from './initialState';
import { fields } from './fields';

import styles from './login-form.module.css'

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { email, password } = state;

  return (
    <>
          <form onSubmit={handleSubmit}>
              <TextField onChange={handleChange} value={email} {...fields.email} />
        <TextField onChange={handleChange} value={password} {...fields.password} />
        <div className={styles.wrap}>
        <Button className={styles.btn} text="Login" type='submit' />
        <Button className={styles.whiteBtn} text='Register' type="submit" />
        </div>
      </form>
    </>
  );
};

export default LoginForm;
