import React from "react";
import styles from "./ProjectCard.module.css";
import projectImage from "../../assets/projects/code.png";
import stackOverflowImage from "../../assets/projects/stackoverflow.png";
import etsyImage from "../../assets/projects/etsy.png";
import uberEatsImage from "../../assets/projects/code.png"; 

const ProjectCard = ({
  project: { title, description, skills, demo, source },
}) => {
  
  const projectSource =
    title === "Etsy Simulation"
      ? "https://github.com/mansiii08/Esty"
      : title === "StackOverflow-Clone"
      ? "https://github.com/mansiii08/StackOverflow"
      : title === "UberEats-Clone" 
      ? "https://github.com/mansiii08/UberEats-Clone" 
      : source;

  return (
    <div className={styles.container}>
      <img
        src={
          title === "StackOverflow-Clone"
            ? stackOverflowImage
            : title === "Etsy Simulation"
            ? etsyImage
            : title === "Uber Eats Clone" 
            ? uberEatsImage 
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
      <div className={styles.links}>
        <a
          href={projectSource}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.iconLink}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={styles.icon}
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.18c-3.338.724-4.042-1.61-4.042-1.61-.546-1.39-1.333-1.757-1.333-1.757-1.089-.745.083-.73.083-.73 1.205.084 1.84 1.234 1.84 1.234 1.07 1.83 2.807 1.302 3.492.996.107-.775.417-1.302.76-1.602-2.665-.304-5.467-1.333-5.467-5.932 0-1.312.468-2.384 1.235-3.225-.123-.305-.536-1.524.116-3.176 0 0 1.008-.323 3.302 1.23a11.478 11.478 0 0 1 6.004 0c2.294-1.554 3.3-1.23 3.3-1.23.653 1.653.24 2.87.118 3.176.77.84 1.233 1.912 1.233 3.225 0 4.61-2.807 5.625-5.48 5.922.43.37.814 1.102.814 2.222v3.293c0 .32.217.694.824.576C20.565 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
