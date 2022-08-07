import Image from "next/image";
import { useField } from "formik";

import eye from "/public/static/eye.svg";
import styles from "../../styles/components/form/CryptoInput.module.scss";
const CryptoInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input className={styles.input} {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className={styles.error}>{meta.error}</div>
      ) : null}
    </>
  );
};

export default CryptoInput;
