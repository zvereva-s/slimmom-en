import { Navigate, Outlet } from "react-router-dom";
import useAuth from "shared/hooks/useAuth";

function PublicRoute() {
    const isLogin = useAuth();

    if (isLogin) {
        return <Navigate to='/calculature' />
    }
    return <Outlet />
}

export default PublicRoute;