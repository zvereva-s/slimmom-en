import Register from "modules/Register/Register";
import styles from './registerPage.module.css';

function RegisterPage() {
    return (
        <main>
            <div className="container">
                <div className="section">
                    <h1  className={styles.title}>Register Page</h1>
                <Register />
                </div>
            </div>
        </main>
    )
};
export default RegisterPage;