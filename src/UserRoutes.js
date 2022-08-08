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
                <Route element={<PublicRoute />}>
                    <Route path="zvereva-s.github.io/login" element={<LoginPage />} />
                    <Route path="zvereva-s.github.io/register" element={<RegisterPage />} />
                    <Route path="zvereva-s.github.io/slimmom-en" element={<MainPage />} />
                    <Route path="zvereva-s.github.io/home" element={<MainPage />} />
                    <Route path="zvereva-s.github.io/" element={<MainPage />} />

                </Route>
                
                <Route element={<PrivateRoute />}>
                <Route path="zvereva-s.github.io/diary" element={<DiaryPage />} />
                <Route path="zvereva-s.github.io/calculator"  element={<CalculatorPage />} />
                </Route>
                
                
                <Route path='*' element={<NotFoundPage />}/>
            </Routes>
        </Suspense>
    )
}
export default UserRoutes;
