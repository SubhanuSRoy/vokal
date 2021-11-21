import React from "react";
import styles from "./hero.module.css";
import illus from "../../Assets/main_illus.png";

function HeroSection() {
  return (
    <div className={styles.container}>
      <img src={illus} alt="gesture illustration" />
      <div className={styles.mainText}>
        <h1>
          giving <strong>voice</strong>
        </h1>
        <h1>
          to the <strong>silenced</strong>
        </h1>
        <button className={styles.btn}>Try Vokal</button>
      </div>
    </div>
  );
}

export default HeroSection;
