import Login from "modules/Login/Login";
import styles from './loginPage.module.css';

function LoginPage() { 
    return (
        <main>
            <div className="container">
                <div className="section">
                    <h1 className={styles.title}>Sign In</h1>
                    <Login />
                </div>
            </div>
        </main>
    )
};
export default LoginPage;