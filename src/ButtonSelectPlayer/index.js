import styles from "./style.module.css";
import Shape2 from "../assets/images/Shape2.svg";
import Oval2 from "../assets/images/Oval2.svg";
const ButtonSelectPlayer = ({ type }) => {
  const typebutton = type === "oval" ? Oval2 : Shape2;
  return (
    <button className={styles.containerButtonPlayer} type="button">
      <img src={typebutton}></img>
    </button>
  );
};

export default ButtonSelectPlayer;
