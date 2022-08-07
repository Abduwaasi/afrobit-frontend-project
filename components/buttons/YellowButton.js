import styles from "../../styles/components/buttons/YellowButton.module.scss";

const YellowButton = ({ text, href }) => {
  return (
    <a href={href} className={styles.button}>
      {text}
    </a>
  );
};

export default YellowButton;
