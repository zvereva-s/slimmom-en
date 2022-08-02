import HeaderMenu from "./HeaderMenu";
import Logo from "../../shared/components/Logo";
import UserMenu from "./UserMenu/UserMenu";
import UserInfo from "./UserInfo";

import styles from "./header.module.css";

function Header() { 
    const isLogin = false;

    return (
        <>
            <header className={styles.header}>
                <nav className={styles.row}>
                    <Logo />
                    <div className={styles.line}></div>
                    {isLogin ? <UserMenu /> : <HeaderMenu />}
                </nav>
            </header>
            {isLogin && (<div className={styles.mobileUserInfo} >
                <UserInfo />
            </div>)}
        </>
    )
};
export default Header;