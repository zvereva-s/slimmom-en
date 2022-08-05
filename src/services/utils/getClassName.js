import styles from '../../modules/Header/HeaderMenu/header-menu.module.css';

export function getClassName({ isActive }) {
  const style = isActive ? styles.isActive : styles.link;
  return style;
}