import useForm from '../../../shared/hooks/useForm';
import TextField from '../../../shared/components/TextField';
import Button from 'shared/components/Button/Button';

import { initialState } from './initialState';
import { fields } from './fields';

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
              <Button text="Login" type="submit"/>
      </form>
    </>
  );
};

export default LoginForm;
