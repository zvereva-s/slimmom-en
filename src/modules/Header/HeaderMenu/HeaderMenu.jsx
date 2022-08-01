import { NavLink } from 'react-router-dom';
import { items } from './items';

import styles from './HeaderMenu.module.css';

function getClassName({ isActive }) {
  const style = isActive ? styles.isActive : styles.link;
  return style;
}

function HeaderMenu() {
  const elements = items.map(({id, link, title}) => 
    <li key={id}>
      <NavLink className={getClassName} to={link}>
        {title}
      </NavLink>
    </li>
);

    console.log(items);
    return (
      <ul>{elements}</ul>
  );
}
export default HeaderMenu;
