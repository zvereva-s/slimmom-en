import PropTypes from 'prop-types';

import Button from "../Button";
import {ReactComponent as AddBtn} from "images/icons/add.svg";


import styles from "./mobile-add-button.module.css";

function MobileAddButton({ onClick, className, type }) {

    return (
        <Button className={`${styles.btnOutline} ${className}`}  type={type} onClick={onClick} >
            <AddBtn className={styles.AddBtn} />
        </Button>
    )
}

export default MobileAddButton;

MobileAddButton.defaultProps = {
    onClick: () => {},
}

MobileAddButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
}
