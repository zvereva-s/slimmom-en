import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentRequest } from 'redux/auth/auth-operations';

import UserRoutes from './UserRoutes';
import Header from './modules/Header';
import Notification from 'shared/components/Notification';




function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentRequest())
  }, [dispatch]);

  return (
    <>
      <Header />
      <UserRoutes />
      <Notification />
    </>
  );
};
export default App;