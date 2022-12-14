
import { useDispatch } from "react-redux";

import { loginRequest } from "redux/auth/auth-operations";

import useAuthState from 'shared/hooks/useAuthState';

import LoginForm from "./LoginForm/LoginForm";
import Loader from "shared/components/Loader";


function Login() {
  const { loading } = useAuthState();

  const dispatch = useDispatch();
  function onLogin(data) {
    dispatch(loginRequest(data));
  }

  return (
    <>
      {loading && <Loader />}
      <LoginForm onSubmit={onLogin} />
    </>
  );
}

export default Login;
