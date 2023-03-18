import styles from "./style.module.css";
import { useLocation } from "react-router-dom";
const MultiPlayer = () => {
  const { state } = useLocation();
  const { player } = state;
  return <div className={styles.containerCPU}>{player}</div>;
};

export default MultiPlayer;
