import { Navigate, Outlet } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

function PrivateRoute() {
    const isLogin = useAuth();

    if (!isLogin) {
        return <Navigate to='/main-page' />
    }
    return <Outlet />
}

export default PrivateRoute;