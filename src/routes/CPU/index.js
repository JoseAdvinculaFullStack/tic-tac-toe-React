import styles from "./style.module.css";
import { useLocation } from "react-router-dom";
const CPU = () => {
  const { state } = useLocation();
  const { player } = state;
  return <div className={styles.containerCPU}>{player}</div>;
};

export default CPU;
