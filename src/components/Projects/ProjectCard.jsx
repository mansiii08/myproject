import React from "react";
import styles from "./ProjectCard.module.css";
import projectImage from "../../assets/projects/code.png"; 
import stackOverflowImage from "../../assets/projects/stackoverflow.png";
import etsyImage from "../../assets/projects/etsy.png"; 

const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      <img
        src={
          title === "StackOverflow-Clone" 
            ? stackOverflowImage 
            : title === "Etsy Simulation" 
            ? etsyImage 
            : projectImage 
        }
        alt={title}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      {/*<div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>*/}
    </div>
  );
};

export default ProjectCard;
