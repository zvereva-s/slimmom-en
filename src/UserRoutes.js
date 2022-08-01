import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import PublicRoute from './shared/components/PublicRoute/PublicRoute.jsx';
import PrivateRoute from './shared/components/PrivateRoute/PrivateRoute.jsx';
import Loader from './shared/components/Loader'


const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage'));
const MainPage = lazy(() => import('./pages/MainPage'));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage'));

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const UserRoutes = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Routes>   
                {/* <Route element={<PublicRoute />}> */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/home" element={<MainPage />} />
                    <Route path="/health-en" element={<MainPage />} />
                    <Route path="/" element={<MainPage />} />
                {/* </Route> */}
                
                {/* <Route element={<PrivateRoute />}> */}
                <Route path="/diary" element={<DiaryPage />} />
                <Route path="/calculator"  element={<CalculatorPage />} />
                {/* </Route> */}
                
                
                <Route path='*' element={<NotFoundPage />}/>
            </Routes>
        </Suspense>
    )
}
export default UserRoutes;