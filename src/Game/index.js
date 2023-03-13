import styles from "./style.module.css";
import Brand from "../Brand/index";
import ButtonSelectPlayer from "../ButtonSelectPlayer";
import ButtonOponent from "../ButtonOponent";
const Game = () => {
  return (
    <div className={styles.containerGame}>
      <Brand />
      <div className={styles.containerPickPlayer}>
        <h2>PICK PLAYER 1’S MARK</h2>
        <div className={styles.containerButtonsSelect}>
          <ButtonSelectPlayer type="shape" />
          <ButtonSelectPlayer type="oval" />
        </div>
        <h3>REMEMBER : X GOES FIRST</h3>
      </div>
      <div className={styles.containerButtonOponent}>
        <ButtonOponent paragraph={"NEW GAME (VS CPU)"} color="yellow" />
        <ButtonOponent paragraph={"NEW GAME  (VS PLAYER)"} color="skyblue" />
      </div>
    </div>
  );
};

export default Game;
