import { useDispatch } from "react-redux";
import useAuthState from 'shared/hooks/useAuthState';
import {signupRequest } from "redux/auth/auth-operations";

import RegisterForm from './RegisterForm';
import Loader from "shared/components/Loader";

function Register() {
    const {loading} = useAuthState();

    const dispatch = useDispatch();

    function onRegister(data) {
        dispatch(signupRequest(data))
     }
    
    return (
        <>
        {loading && <Loader />}
        <RegisterForm onSubmit={onRegister} />
        </>
    )
 };
export default Register;