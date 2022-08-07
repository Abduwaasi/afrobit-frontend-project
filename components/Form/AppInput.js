import Image from "next/image";
import { useField } from "formik";

import eye from "/public/static/eye.svg";
import styles from "../../styles/components/form/AppInput.module.scss";
const AppInput = ({ label, showPassword, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name} className={styles.label}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        <input className={styles.input} {...field} {...props} />
        {showPassword && (
          <div className={styles.eye}>
            <Image src={eye} alt="show password icon" />
          </div>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default AppInput;
