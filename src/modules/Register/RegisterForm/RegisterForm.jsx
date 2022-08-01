import useForm from '../../../shared/hooks/useForm';
import TextField from '../../../shared/components/TextField';

import { fields } from './fields';
import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const { name, email, password } = state;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField onChange={handleChange} value={name} {...fields.name} />
        <TextField onChange={handleChange} value={email} {...fields.email} />
        <TextField onChange={handleChange} value={password} {...fields.password} />
      </form>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </>
  );
};

export default RegisterForm;
