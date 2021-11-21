import React from "react";
import styles from "./flowchartItem.module.css";
function FlowchartItem({ left, right, imgURL, name }) {
  return (
    <div className={styles.item}>
      {left && <img src={imgURL} alt="" />}
      <h1>{name}</h1>
      {right && <img src={imgURL} alt="" />}
    </div>
  );
}

export default FlowchartItem;
