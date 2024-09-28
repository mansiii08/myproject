import React from "react";
import styles from "./Hero.module.css";
//import { getImageUrl } from "../../utils";
import imgg from "../../assets/hero/imgg.png"; 
 const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mansi</h1>
        <p className={styles.description}>
        I am a software engineer passionate about building full-stack web applications that blend functionality and design. 
        </p>
        <a href="mailto:mansithaker8@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={imgg} 
        alt="Mansi Thaker"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
export default Hero;