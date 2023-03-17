import styles from "./style.module.css";
import Shape2 from "../assets/iconsSvg/Shape2";
import Oval2 from "../assets/iconsSvg/Oval2";

const ButtonSelectPlayer = ({
  type,
  buttonStylePlayer,
  buttonStyleCPU,
  setButtonStylePlayer,
  setButtonStyleCPU,
}) => {
  const typebutton = type === "oval" ? <Oval2 /> : <Shape2 fill="#a8bfc9" />;
  const typeclass = type === "oval" ? "oval2" : "shape2";
  return (
    <button
      className={`${styles.containerButtonPlayer} ${styles[typeclass]} `}
      type="button"
      onClick={() => "hola"}
    >
      {typebutton}
    </button>
  );
};

export default ButtonSelectPlayer;
