import { useMemo } from "react";
import { nanoid } from "@reduxjs/toolkit";

import styles from './text-field.module.css'

function TextField({ label, name, type, value, onChange, placeholder, required }) { 
    const id = useMemo(() => nanoid(), []);

    return (
        <div>
            {label && <label htmlFor={id} >{label}</label>}
            <input className={styles.input} id={id} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} required={required} />
        </div>
    )
};
export default TextField;