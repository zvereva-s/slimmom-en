import PropTypes from 'prop-types';

import { ReactComponent as MenuIcon } from "../../../images/icons/menu.svg";
import { ReactComponent as MenuClose } from "../../../images/icons/close.svg";

import UserInfo from "../UserInfo";

import styles from "./user-menu.module.css";

function UserMenu({isLogin, onClick, isShowed}) {

    return (
        <div className={styles.wraper} >
            <div className={styles.container}>
                <div className={styles.userInfo} >
                    <UserInfo />
                </div>
                {isShowed ? <MenuClose onClick={onClick} className={styles.menuClose} /> : <MenuIcon onClick={onClick} className={styles.menuIcon} />}
            </div>
        </div>
    )
}

export default UserMenu;

UserMenu.defaultProps = {
    onClick: () => {},
}

UserMenu.propTypes = { 
    onClick: PropTypes.func.isRequired,
    isShowed: PropTypes.bool.isRequired,
}