import React from "react";
import styles from "./Info.module.css";

export const Info = () => {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <div className={styles.section}>
          <span className={styles.hand}>Greetings 👋</span> I&apos;m
          <span className={styles.name}> Abdulrhman Elsaed,</span> a seasoned
          full-stack software engineer with a focused expertise in web
          development, My career journey is centered around constructing dynamic
          digital products that seamlessly merge innovation and functionality.
        </div>
        <div className={styles.section}>
          Presently, I do engineering at GeoTech where I harness my skills to
          architect and craft GIS-driven applications. Within this domain, I
          collaboratively design and develop applications that intricately
          integrate mapping utilities, contributing to the enhancement of
          geospatial experiences.
        </div>
        <div className={styles.section}>
          Beyond the confines of computers, you can find me working out, reading
          a book, indulging in strategic games, or learning smth about music
          theory.
        </div>
      </div>
    </div>
  );
};
