import styles from "../../styles/components/buttons/BlackButton.module.scss";

const BlackButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default BlackButton;
