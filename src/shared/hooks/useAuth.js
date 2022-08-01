import { useSelector } from "react-redux";
import { isLogin } from "redux/auth/auth-selectors";

function useAuth() {
    const checkLogin = useSelector(isLogin);
    return checkLogin;
}

export default useAuth;