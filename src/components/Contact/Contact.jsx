import React from 'react';
import emailIcon from '../../assets/contact/emailIcon.png'; 
import linkedinIcon from '../../assets/contact/linkedinIcon.png'; 
import styles from './Contact.module.css'; 

const Contact = () => {
    return (
      <footer id="contact" className={styles.container}>
        <div>
          <h2>Contact</h2>
          <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={emailIcon} alt="Email icon" />
            <a href="mailto:mansithaker8@gmail.com">mansithaker8@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={linkedinIcon} alt="LinkedIn icon" />
            <a 
              href="https://www.linkedin.com/in/mansithaker3/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/mansithaker3
            </a>
          </li>
        </ul>
      </footer>
    );
};
  
export default Contact;
