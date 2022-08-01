import HeaderMenu from "./HeaderMenu";
import Logo from "../../shared/components/Logo";

import styles from "./header.module.css";

function Header() { 
    return (
        <header className={styles.header}>
            <div className="container">          
                <nav className={styles.row}>
                    <Logo />
                    <div className={styles.line}></div>
                    <HeaderMenu />
                </nav>
            </div>
        </header>
    )
};
export default Header;