import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useAuthState from 'shared/hooks/useAuthState';
import {signupRequest } from "redux/auth/auth-operations";

import RegisterForm from './RegisterForm';
import Loader from "shared/components/Loader";

function Register() {
    const { loading } = useAuthState();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    function onRegister(data) {
        dispatch(signupRequest(data));
        navigate("/login", { replace: true })
     }  
    
    return (
        <>
        {loading && <Loader />}
        <RegisterForm onSubmit={onRegister} />
        </>
    )
 };
export default Register;