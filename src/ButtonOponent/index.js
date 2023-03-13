import styles from "./style.module.css";

const ButtonOponent = ({ paragraph, color }) => {
  const paragraphButton =
    paragraph === "NEW GAME (VS CPU)"
      ? "NEW GAME (VS CPU)"
      : "NEW GAME  (VS PLAYER)";
  const buttonColor = color === "skyblue" ? "skyblue" : "yellow";
  return (
    <button
      className={`${styles.containerButtonOponent} ${styles[buttonColor]}`}
      type="button"
    >
      {paragraphButton}
    </button>
  );
};

export default ButtonOponent;
