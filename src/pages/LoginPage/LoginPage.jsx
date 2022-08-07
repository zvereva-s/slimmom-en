import Login from 'modules/Login/Login';

import ImgList from 'shared/components/ImgList';

import styles from './loginPage.module.css';

function LoginPage() {
  return (
    <main>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.section}>
            <h1 className={styles.title}>Sign In</h1>
            <Login />
          </div>
        </div>
        <ImgList />
      </div>
    </main>
  );
}
export default LoginPage;
