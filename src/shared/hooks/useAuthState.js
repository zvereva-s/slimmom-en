import { useSelector } from "react-redux";
import { auth } from "redux/auth/auth-selectors";

function useAuthState() {
    const authState = useSelector(auth);
    return authState;
}

export default useAuthState;