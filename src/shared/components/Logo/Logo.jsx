import { Link } from "react-router-dom";
import {ReactComponent as LogoIcon} from "./logo.svg";
import {ReactComponent as LogoText} from "./logo-text.svg";

import styles from "./logo.module.css";

function Logo() {
    const isLogin = false;

    return (
        <Link to="/">
            <div className={styles.logoContainer}>
                <LogoIcon className={styles.logo} />
                <LogoText className={styles.logoText} />
                {isLogin && <LogoText className={styles.logedText} />}
                
            </div>
        </Link>
    )
};

export default Logo;