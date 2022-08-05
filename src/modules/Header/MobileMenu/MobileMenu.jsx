import { createPortal } from "react-dom";
import { NavLink } from 'react-router-dom';

import { items } from '../HeaderMenu/items';

import styles from "./mobile-menu.module.css"

import { getClassName } from '../../../services/utils/getClassNameMobileMenu';

const modalRoot = document.getElementById("modal");

function MobileMenu({onClick}) {

  const selectItems =items.filter(item => item.private);
  
  const elements = selectItems.map(({id, link, title}) => 
    <li key={id} className={styles.item}>
      <NavLink className={getClassName} onClick={onClick} to={link}>
        {title}
      </NavLink>
    </li>
  );

  return (
    createPortal(
      (
        <div className={styles.overlay} >
          <div className={styles.mobileContainer} >
              <ul className={styles.mobileMenu} > 
                 {elements}
              </ul>
          </div>
        </div>
      ), modalRoot)      
  )
}

export default MobileMenu;