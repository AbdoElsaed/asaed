import React, { FC } from "react";
import styles from "./Projects.module.css";

interface CardI {
  title: string;
  description: string;
  tools?: string[];
  repo?: string;
  url?: string;
}

export const Card: FC<CardI> = ({ description, repo, title, tools, url }) => {
  return (
    <div className={styles.cardRoot}>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardDesc}>{description}</p>
      <p className={styles.cardTools}>[{tools?.join(", ")}]</p>
    </div>
  );
};
