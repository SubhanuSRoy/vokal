import React from "react";
import styles from "./description.module.css";

function Description() {
  return (
    <div className={styles.container}>
      <h1>" Everyone deserves a voice "</h1>
      <h3>
        Speech is a gift, not everyone gets. More than 1.5% of the total
        population of India suffers from some form of Speech Disorder as per the
        latest report by NSSO.
      </h3>
      <hr />
      <h3>
        They feel frustrated when trying to communicate with friends and family.
      </h3>
      <hr />
      <h3>Most people dont understand sign language used by mute people</h3>
      <hr />
      <h3>
        Vokal tries to bridge this communication gap with the help of technology
      </h3>
    </div>
  );
}

export default Description;
