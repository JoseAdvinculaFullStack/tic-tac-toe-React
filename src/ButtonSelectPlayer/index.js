import styles from "./style.module.css";
import Shape2 from "../assets/iconsSvg/Shape2";
import Oval2 from "../assets/iconsSvg/Oval2";

const ButtonSelectPlayer = ({
  type,
  buttonStyleShape,
  buttonStyleOval,
  setButtonStyleShape,
  setButtonStyleOval,
  check,
}) => {
  const typebutton = type === "oval" ? <Oval2 /> : <Shape2 fill="#a8bfc9" />;
  const typeclass = type === "oval" ? "oval2" : "shape2";
  const validationPlayer = (
    buttonStyleShape,
    buttonStyleOval,
    setButtonStyleShape,
    setButtonStyleOval,
    check
  ) => {
    if (buttonStyleShape) {
      if (check === "activeOval" && buttonStyleShape == "disabledShape") {
        setButtonStyleShape("disabledOval");
        setButtonStyleOval("activeShape");
      }
    }

    if (buttonStyleOval) {
      if (check === "activeShape" && buttonStyleOval == "disabledOval") {
        setButtonStyleShape("disabledShape");
        setButtonStyleOval("activeOval");
      }
    }
  };
  return (
    <button
      className={`${styles.containerButtonPlayer} ${styles[typeclass]} ${
        buttonStyleOval ? styles[buttonStyleOval] : ""
      } ${buttonStyleShape ? styles[buttonStyleShape] : ""}`}
      type="button"
      onClick={() =>
        validationPlayer(
          buttonStyleShape,
          buttonStyleOval,
          setButtonStyleShape,
          setButtonStyleOval,
          check
        )
      }
    >
      {typebutton}
    </button>
  );
};

export default ButtonSelectPlayer;
