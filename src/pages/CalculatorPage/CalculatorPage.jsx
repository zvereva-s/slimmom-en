import CalculatorForm from "modules/Calculator/CalculatorForm";
import styles from './calculatorPage.module.css';


function CalculatorPage() {
    return (
        <main>
            <div className="container">
                <div className="section">
                <h1 className={styles.title}>Calculate your daily calorie intake right now</h1>
                <CalculatorForm />
                </div>

            </div>
        </main>
    )
 };
export default CalculatorPage;