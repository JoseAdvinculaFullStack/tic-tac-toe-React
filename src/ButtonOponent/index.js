import styles from "./style.module.css";
import Shape2 from "../assets/images/Shape2.svg";
import Oval2 from "../assets/images/Oval2.svg";
const ButtonOponent = ({ paragraph, color }) => {
  const paragraphButton =
    paragraph === "NEW GAME (VS CPU)"
      ? "NEW GAME (VS CPU)"
      : "NEW GAME  (VS PLAYER)";
  const buttonColor = color === "skyblue" ? "skyblue" : "yellow";
  return (
    <button
      className={`${styles.containerButtonPlayer} ${styles[buttonColor]}`}
      type="button"
    >
      {paragraphButton}
    </button>
  );
};

export default ButtonOponent;
