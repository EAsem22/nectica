import React from 'react';
import styles from './CTA.module.css';

const CTA = () => {
  return (
    <section id="involved" className={`section ${styles.wrap}`}>
      <div className="container">
        <div className={styles.card}>
          <div>
            <h2>Call for Community Liaisons</h2>
            <p>Join our team of community liaisons and help drive change from within.</p>
          </div>
          <div className={styles.actions}>
            <a href="#signup" className={styles.btnDark}>Volunteer</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;


