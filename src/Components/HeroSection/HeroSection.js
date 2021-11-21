import React from "react";
import styles from "./hero.module.css";
import illus from "../../Assets/main_illus.png";
import {Link} from "react-router-dom"

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
        <Link to="/vokal" className={styles.btn}>Try Vokal</Link>
      </div>
    </div>
  );
}

export default HeroSection;
