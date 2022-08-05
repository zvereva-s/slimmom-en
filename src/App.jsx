import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from 'shared/hooks/useAuth';

import { getCurrentRequest } from 'redux/auth/auth-operations';
import { getToken } from 'redux/auth/auth-selectors';

import BackGround from './modules/BackGround';
import UserRoutes from './UserRoutes';
import Header from './modules/Header';
import Notification from 'shared/components/Notification';

function App() {
  const dispatch = useDispatch();
  const isLogin = useAuth();
  const token = useSelector(getToken);

  useEffect(() => {
    if (isLogin || token) {
      dispatch(getCurrentRequest());
    }
  }, [dispatch]);

  return (
    <>
      {isLogin && <BackGround />}
      <Header />
      <UserRoutes />
      <Notification />
    </>
  );
}
export default App;
