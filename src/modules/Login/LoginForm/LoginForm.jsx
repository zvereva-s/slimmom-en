import useForm from '../../../shared/hooks/useForm';
import TextField from '../../../shared/components/TextField';

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
      </form>
      <div>
        <button>Login</button>
        <button>Register</button>
      </div>
    </>
  );
};

export default LoginForm;
