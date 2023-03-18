import styles from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
const ButtonOponent = ({ paragraph, color, turnPlayer }) => {
  const paragraphButton =
    paragraph === "NEW GAME (VS CPU)"
      ? "NEW GAME (VS CPU)"
      : "NEW GAME  (VS PLAYER)";
  const buttonColor = color === "skyblue" ? "skyblue" : "yellow";
  const routes = paragraph === "NEW GAME (VS CPU)" ? "CPU" : "multiPlayer";
  const navigate = useNavigate();
  const handleClick = () => {
    paragraph === "NEW GAME (VS CPU)"
      ? navigate("/CPU", { state: { player: turnPlayer } })
      : navigate("/MultiPlayer", { state: { player: turnPlayer } });
  };
  return (
    <button
      className={`${styles.containerButtonOponent} ${styles[buttonColor]}`}
      type="button"
      onClick={handleClick}
    >
      <Link to={{ pathname: `/${routes}` }}>{paragraphButton}</Link>
    </button>
  );
};

export default ButtonOponent;
