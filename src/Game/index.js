import styles from "./style.module.css";
import Brand from "../Brand/index";
import ButtonSelectPlayer from "../ButtonSelectPlayer";
import ButtonOponent from "../ButtonOponent";
import { useState } from "react";
const Game = () => {
  const [buttonStylePlayer, setButtonStylePlayer] = useState("");
  const [buttonStyleCPU, setButtonStyleCPU] = useState("");
  return (
    <div className={styles.containerGame}>
      <Brand />
      <div className={styles.containerPickPlayer}>
        <h2>PICK PLAYER 1’S MARK</h2>
        <div className={styles.containerButtonsSelect}>
          <ButtonSelectPlayer
            type="shape"
            buttonStylePlayer={buttonStylePlayer}
            buttonStyleCPU={buttonStyleCPU}
            setButtonStylePlayer={setButtonStylePlayer}
            setButtonStyleCPU={setButtonStyleCPU}
          />
          <ButtonSelectPlayer
            type="oval"
            buttonStylePlayer={buttonStylePlayer}
            buttonStyleCPU={buttonStyleCPU}
            setButtonStylePlayer={setButtonStylePlayer}
            setButtonStyleCPU={setButtonStyleCPU}
          />
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
