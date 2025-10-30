import React from 'react';
import styles from './FeaturedProject.module.css';

const FeaturedProject = () => {
  return (
    <section id="featured" className="section">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.media}>
            <img src="https://via.placeholder.com/640x420?text=Featured+Project" alt="Water Systems in Rural Kenya" />
          </div>
          <div className={styles.copy}>
            <h2>Featured Project: Water Systems in Rural Kenya</h2>
            <p>
              NECTICA partnered with local leaders to install sustainable water systems, improving access to clean water for over 5,000 residents.
            </p>
            <a href="#projects" className={styles.link}>View projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;


