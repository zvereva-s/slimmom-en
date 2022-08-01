import Diary from 'modules/Diary';
import styles from './diaryPage.module.css';

function DiaryPage() {
  return (
    <main>
      <div className="container">
        <div className="section">
          <h1 className={styles.title}>Diary Page</h1>
          <Diary />
        </div>
      </div>
    </main>
  );
}
export default DiaryPage;
