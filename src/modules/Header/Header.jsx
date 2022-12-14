import { useState, useEffect } from "react";

import useAuth from "shared/hooks/useAuth";

import Logo from "../../shared/components/Logo";
import HeaderMenu from "./HeaderMenu";
import UserMenu from "./UserMenu/UserMenu";
import UserInfo from "./UserInfo";
import MobileMenu from "./MobileMenu";

import styles from "./header.module.css";


function Header() { 
    const [isShowed, changeShowed] = useState(false);

    const isLogin = useAuth();

    useEffect(() => {
        !isLogin && changeShowed( false)
    }, [isLogin] )

    const onMenuBtnClick = () => {
        isShowed ? changeShowed( false) : changeShowed( true);
    };

    window.addEventListener('resize', () => {
        let width = window.innerWidth;
        if (width > "1280") {
            changeShowed(false)
        }
    });

    const bodyEl = document.querySelector("body");    
    isShowed && isLogin ? bodyEl.classList.add('stop-scrolling') : bodyEl.classList.remove('stop-scrolling');

    return (
            <div  className={`${styles.outline} ${styles.container}`} >
                <div >
                    <header className={styles.header} >
                        <nav className={styles.row}>
                            <Logo isLogin={isLogin} />
                            <div className={styles.line}></div>
                            {isLogin && <div className={styles.desktopMenu}>
                                <HeaderMenu isLogin={isLogin} />
                            </div>}
                            {isLogin ? <UserMenu onClick={onMenuBtnClick} isLogin={isLogin} isShowed={isShowed} /> : <HeaderMenu isLogin={isLogin} />}
                        </nav>
                    </header>
                </div>
                {isLogin && (
                    <div className={styles.mobileUserInfo} >
                        <UserInfo />
                    </div>
                )}
                {isShowed && isLogin && <MobileMenu onClick={onMenuBtnClick} />}
            </div>
    )
};

export default Header;