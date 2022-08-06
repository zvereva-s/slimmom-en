import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { items } from './items';

import styles from './header-menu.module.css';

import { getClassName } from '../../../services/utils/utils';

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

HeaderMenu.propTypes = {
  isLogin: PropTypes.bool.isRequired,
}