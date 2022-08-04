import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NotificationManager } from 'react-notifications';

import { signupRequest } from "redux/auth/auth-operations";

import useAuthState from 'shared/hooks/useAuthState';
import Loader from "shared/components/Loader";

import RegisterForm from './RegisterForm';

function Register() {
    const { loading, error } = useAuthState();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    function onRegister(data) {
        dispatch(signupRequest(data));
        if (!error) {
            NotificationManager.info(`Please sign IN`);
            navigate("/login", { replace: true }) 
        }
     }  
    
    return (
        <>
        {loading && <Loader />}
        <RegisterForm onSubmit={onRegister} />
        </>
    )
 };
export default Register;