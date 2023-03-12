import styles from "./style.module.css";
import Equis from "../../src/assets/images/Shape.svg";
import Oval from "../assets/images/Oval.svg";
const Brand = () => {
  return (
    <div className={styles.containerBrand}>
      <img src={Equis} />
      <img src={Oval} />
    </div>
  );
};

export default Brand;
