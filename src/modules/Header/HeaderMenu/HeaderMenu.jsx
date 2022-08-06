import { NavLink } from 'react-router-dom';
import { items } from './items';

import styles from './header-menu.module.css';


export function getClassName({ isActive }) {
  const style = isActive ? styles.isActive : styles.link;
  return style;
}

function HeaderMenu({isLogin}) {
  
  const selectItems =isLogin ? items.filter(item => item.private) : items.filter(item => !item.private);

  const elements = selectItems.map(({id, link, title}) => 
    <li key={id} className={styles.item}>
      <NavLink className={getClassName} to={link}>
        {title}
      </NavLink>
    </li>
);

    return (
      <ul className={styles.menu}>{elements}</ul>
  );
}
export default HeaderMenu;
