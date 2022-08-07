import styles from "../../styles/components/buttons/BlackButton.module.scss";

const BlackButton = ({ text, href }) => {
  return (
    <a href={href} className={styles.button}>
      {text}
    </a>
  );
};

export default BlackButton;
