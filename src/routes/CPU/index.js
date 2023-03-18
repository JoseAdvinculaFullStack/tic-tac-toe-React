import styles from "./style.module.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const CPU = () => {
  const { state } = useLocation();
  const { player } = state ?? {};
  const [playerLocal, setPlayerLocal] = useState("");

  useEffect(() => {
    // Si hay información en el estado local, recuperarla
    const localPlayer = localStorage.getItem("player");
    if (localPlayer) {
      setPlayerLocal(localPlayer);
    }
  }, []);

  useEffect(() => {
    // Almacenar la información en el estado local al navegar a la ruta
    if (state && player) {
      localStorage.setItem("player", player);
      setPlayerLocal(player);
    }
  }, [state, player]);

  return <div className={styles.containerCPU}>{playerLocal}</div>;
};

export default CPU;
