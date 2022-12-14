import PropTypes from 'prop-types';

import useForm from '../../../shared/hooks/useForm';
import TextField from '../../../shared/components/TextField';
import Button from 'shared/components/Button/Button';

import { initialState } from './initialState';
import { fields } from './fields';

import btnStyles from '../../../shared/styles/buttons.module.css';
import styles from './login-form.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });
  const { email, password } = state;

  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} className={styles.input} value={email} {...fields.email} />
        <TextField className={styles.input}
          onChange={handleChange}
          value={password}
          {...fields.password}
        />
        <div className={styles.wrap}>
          <Button className={btnStyles.login} text="Login" type="submit" />
          <Button
            className={btnStyles.register}
            text="Register"
            type="button" disabled
          />
        </div>
      </form>
    </>
  );
};

export default LoginForm;

LoginForm.defaultProps = {
  onSubmit: () => {},
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}