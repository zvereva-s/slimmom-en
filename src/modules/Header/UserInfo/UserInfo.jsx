import Button from "shared/components/Button/Button";

import styles from "./user-info.module.css";

function UserInfo() {
    const name = "Paul";

    const onLogout = () => {
        
        return
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