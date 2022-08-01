import { TailSpin } from 'react-loader-spinner';
// import styles from './spinner.module.css';

function Spinner() {
  return (
    // <div className={styles.wrapper}>
      <TailSpin
        height="15"
        width="15"
        color="black"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperClass=""
        visible={true}
      />
    // </div>
  );
}
export default Spinner;