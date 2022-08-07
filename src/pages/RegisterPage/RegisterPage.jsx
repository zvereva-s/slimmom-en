import Register from 'modules/Register/Register';

import ImgList from 'shared/components/ImgList';

import styles from './registerPage.module.css';

function RegisterPage() {
  return (
    <main>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.section}>
            <h1 className={styles.title}>Register Page</h1>
            <Register />
          </div>
        </div>
        <ImgList
          classNameVector={styles.vector}
          classNameStrawberry={styles.strawberry}
          classNameTablenVector={styles.tablenVector}
          classNameTabletBanana={styles.tabletBanana}
          classNameTabletLayer={styles.tabletLayer}
        />
      </div>
    </main>
  );
}
export default RegisterPage;
