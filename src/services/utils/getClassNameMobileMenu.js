import styles from '../../modules/Header/MobileMenu/mobile-menu.module.css';
export function getClassName({ isActive }) {
  const style = isActive ? styles.isActive : styles.link;
  return style;
}