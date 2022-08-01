
import UserRoutes from './UserRoutes';
import Header from './modules/Header';
import Notification from 'shared/components/Notification';




function App() {
  return (
    <>
      <Header />
      <UserRoutes />
      <Notification />
    </>
  );
};
export default App;