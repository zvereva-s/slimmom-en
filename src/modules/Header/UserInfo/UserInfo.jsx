import { useSelector, useDispatch } from "react-redux";

import { auth } from "redux/auth/auth-selectors";
import { logoutRequest } from "redux/auth/auth-operations";

import Button from "shared/components/Button/Button";

import styles from "./user-info.module.css";

function UserInfo() {
    const { user } = useSelector(auth);

    const name = user.username;
    const dispatch = useDispatch();
    
    function onLogout(){
        dispatch(logoutRequest())
    }

    return (
        <>
            <p className={styles.name} >{name}</p>
            <div className={styles.line}></div>
            <Button className={styles.btn} type="button" onClick={onLogout} text="exit"  />
        </>
    )
}

export default UserInfo;