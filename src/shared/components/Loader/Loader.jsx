import { ThreeDots } from  'react-loader-spinner'
import styles from './loader.module.css';


function Loader() {
    return (
        <div className={styles.box}>
            <ThreeDots color="grey" ariaLabel='loading' />
        </div>);
}

export default Loader;