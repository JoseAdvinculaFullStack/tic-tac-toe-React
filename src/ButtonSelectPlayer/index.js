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
      if (buttonStyleShape === "activeShape") {
        setButtonStyleShape("disabledShape");
      } else {
        setButtonStyleOval("activeOval");
      }
    } else {
      if (check === "activeOval") {
        setButtonStyleOval("disabledOval");
      } else {
        setButtonStyleShape("activeShape");
      }
    }

    if (buttonStyleOval) {
      if (buttonStyleOval === "activeOval") {
        setButtonStyleOval("disabledOval");
      } else {
        setButtonStyleShape("activeShape");
      }
    } else {
      if (check === "activeShape") {
        setButtonStyleShape("disabledShape");
      } else {
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
