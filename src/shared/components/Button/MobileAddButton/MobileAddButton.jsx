import {ReactComponent as AddBtn} from "images/add.svg";
import Button from "../Button";

import styles from "./mobile-add-button.module.css";

function MobileAddButton({ onClick, className, type }) {

    return (
        <Button className={`${styles.btnOutline} ${className}`}  type={type} onClick={onClick} >
            <AddBtn className={styles.AddBtn} />
        </Button>
    )
}

export default MobileAddButton;