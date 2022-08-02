import Calculator from 'modules/Calculator';
import styles from './calculatorPage.module.css';


function CalculatorPage() {
    return (
        <main>
            <div className="container">

                <h1>Calculate your daily calorie intake right now</h1>

                <div className="section">
                <h1 className={styles.title}>Calculate your daily calorie intake right now</h1>
                <Calculator />
                </div>

            </div>
        </main>
    )
 };
export default CalculatorPage;