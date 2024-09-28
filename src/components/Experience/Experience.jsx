import React from 'react';
import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import digitattvaImage from '../../assets/history/digitattvatechnolabs.png';
import adobeImage from '../../assets/history/adobe.png'; 
import webstertechImage from '../../assets/history/webstertech.png'; 
// Skill icons imports
import cssIcon from '../../assets/skills/css.png';
import figmaIcon from '../../assets/skills/figma.png';
import graphqlIcon from '../../assets/skills/graphql.png';
import htmlIcon from '../../assets/skills/html.png';
import mongodbIcon from '../../assets/skills/mongodb.png';
import nodeIcon from '../../assets/skills/node.png';
import reactIcon from '../../assets/skills/react.png';

// Define the historyImages object
const historyImages = {
  webstertech: webstertechImage, 
  'Digitattva Technolabs': digitattvaImage,
  Adobe: adobeImage, 
};

// Define the skillImages object
const skillImages = {
  CSS: cssIcon,
  Figma: figmaIcon,
  GraphQL: graphqlIcon,
  HTML: htmlIcon,
  MongoDB: mongodbIcon,
  Node: nodeIcon,
  React: reactIcon,
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={skillImages[skill.title]} alt={skill.title} />
              </div>
              <p className={styles.skillTitle}>{skill.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.history}>
          {history.map((item, id) => (
            <div key={id} className={styles.historyItem}>
              <div className={styles.historyImageContainer}>
                <img src={historyImages[item.organisation]} alt={item.organisation} />
              </div>
              <div className={styles.historyItemDetails}>
                <h3 className={styles.historyRole}>{item.role}</h3>
                <h4 className={styles.historyOrg}>{item.organisation}</h4>
                <p className={styles.historyDate}>
                  {item.startDate} - {item.endDate}
                </p>
                <ul className={styles.historyExperiences}>
                  {item.experiences.map((exp, expId) => (
                    <li key={expId}>{exp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
