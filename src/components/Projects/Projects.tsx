import React from "react";
import styles from "./Projects.module.css";
import { Card } from "./Card";
import projects from "@/_data/projects.json";

export const Projects = () => {
  return (
    <div className={styles.root}>
      <h4 className={styles.header}>Projects</h4>
      <div className={styles.projectsContainer}>
        {projects.map((project, i) => (
          <a key={i} href="#">
            <Card
              description={project.desciption}
              title={project.title}
              tools={project.tools}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
