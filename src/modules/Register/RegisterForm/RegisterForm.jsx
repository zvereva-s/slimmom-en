import useForm from '../../../shared/hooks/useForm';
import TextField from '../../../shared/components/TextField';
import Button from 'shared/components/Button/Button';

import { fields } from './fields';
import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const { username, email, password } = state;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} value={username} {...fields.name} />
        <TextField onChange={handleChange} value={email} {...fields.email} />
        <TextField onChange={handleChange} value={password} {...fields.password} />
        <Button text='Register' type="submit" />
      </form>
    </>
  );
};

export default RegisterForm;
