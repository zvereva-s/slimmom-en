import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {ReactComponent as LogoIcon} from "../../../images/icons/logo.svg";
import {ReactComponent as LogoText} from "../../../images/icons/logo-text.svg";

import styles from "./logo.module.css";

function Logo({isLogin}) {
    
    const path = isLogin ? "/diary" : "/home";

    return (
        <Link to={path}>
            <div className={styles.logoContainer}>
                <LogoIcon className={styles.logo} />
                <LogoText className={styles.logoText} />
                {isLogin && <LogoText className={styles.logedText} />}
            </div>
        </Link>
    )
};

export default Logo;

Logo.propTypes = {
    isLogin: PropTypes.bool.isRequired,
}