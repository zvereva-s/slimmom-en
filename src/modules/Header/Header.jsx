import { useState } from "react";

import useAuth from "shared/hooks/useAuth";

import HeaderMenu from "./HeaderMenu";
import Logo from "../../shared/components/Logo";
import UserMenu from "./UserMenu/UserMenu";
import UserInfo from "./UserInfo";
import MobileMenu from "./MobileMenu";

import styles from "./header.module.css";

function Header() { 
    const [isShowed, changeShowed] = useState(false);

    const isLogin = useAuth();

    const onMenuBtnClick = () => {
        changeShowed( isShowed ? false : true)
    };

    return (
        <>
            <header className={`${styles.header} container`}>
                <nav className={styles.row}>
                    <Logo isLogin={isLogin} />
                    <div className={styles.line}></div>
                    {isLogin ? <UserMenu onClick={onMenuBtnClick} isLogin={isLogin} isShowed={isShowed} /> : <HeaderMenu isLogin={isLogin} />}
                </nav>
            </header>
            {isLogin && (
                <div className={styles.mobileUserInfo} >
                    <UserInfo />
                </div>
            )}
            {isLogin && isShowed && <MobileMenu onClick={onMenuBtnClick} />}
        </>
    )
};

export default Header;