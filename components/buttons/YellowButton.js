import styles from "../../styles/components/buttons/YellowButton.module.scss";

const YellowButton = ({ text }) => {
  return <button className={styles.button}>{text}</button>;
};

export default YellowButton;
