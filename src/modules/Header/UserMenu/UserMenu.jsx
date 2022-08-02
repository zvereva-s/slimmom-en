import { ReactComponent as MenuIcon } from "../../../images/menu.svg";
import UserInfo from "../UserInfo";
import HeaderMenu from "../HeaderMenu";

import styles from "./user-menu.module.css";

function UserMenu({isLogin}) {

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.userInfo} >
                    <UserInfo />
                </div>
                <MenuIcon className={styles.menuIcon} />
            </div>
            <div className={styles.desktopMenu}>
                <HeaderMenu isLogin={isLogin} />
            </div>
        </div>
    )
}

export default UserMenu;