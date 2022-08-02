import Home from 'modules/Home';
import styles from './mainPage.module.css';

function MainPage() {
  return (
    <main>
      <div className="container">
        <div className="section">
          <h1 className={styles.title}>
            Calculate your daily calorie intake right now
          </h1>
          <Home />
        </div>
      </div>
    </main>
  );
}
export default MainPage;
