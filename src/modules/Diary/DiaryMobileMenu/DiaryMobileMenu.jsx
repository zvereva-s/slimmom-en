import { createPortal } from "react-dom";
import PropTypes from 'prop-types';

import DiaryAddProductForm from "../DiaryAddProductForm";

import { ReactComponent as BackBtn } from "images/icons/back.svg";

import styles from "./diary-mobile-menu.module.css"

const modalRoot = document.getElementById("modal");

function DiaryMobileMenu({onClick}) {

  return (
    createPortal(
      (
        <>
          <div className={styles.overlay} >
            <div className={styles.mobileContainer} >
              <BackBtn className={styles.backBtn} onClick={onClick} />
              <DiaryAddProductForm />
            </div>
        </div>
        </>
      ), modalRoot)      
  )
}

export default DiaryMobileMenu;

DiaryMobileMenu.defaultProps = {
  onClick: () => {},
}

DiaryMobileMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
}