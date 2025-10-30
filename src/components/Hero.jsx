import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section id="about" className={`section ${styles.hero}`}> 
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h1 className={styles.title}>Empowering communities to create impactful solutions</h1>
            <p className={styles.subtitle}>
              NECTICA connects community leaders with resources and support to drive sustainable change.
            </p>
            <div className={styles.ctaRow}>
              <a href="/signup" className={styles.primaryBtn}>Get started</a>
              <a href="/login" className={styles.secondaryBtn}>Sign in</a>
            </div>
          </div>
          <div className={styles.media}>
            <img src="/hero-people.png" alt="Community members collaborating" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


