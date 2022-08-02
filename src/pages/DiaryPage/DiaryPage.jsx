import Diary from 'modules/Diary';
import Summary from 'modules/Summary';
import styles from './diaryPage.module.css';

function DiaryPage() {
  return (
    <main>
      <div className="container">
        <div className={`${styles[`section-diary`]} section`}>
            <div className='diary'>
              <h1 className={styles.title}>Diary Page</h1>
              <Diary />
          </div>
              <Summary />
        </div>
      </div>
    </main>
  );
}
export default DiaryPage;
