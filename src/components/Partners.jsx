import React from 'react';
import styles from './Partners.module.css';

const logos = [
  'GoodTech',
  'Education for All',
  'Sustainable Futures',
  'The Urban Lab',
  'Global Health Alliance',
  'Epic Impact',
];

const Partners = () => {
  return (
    <section id="partners" className="section">
      <div className="container">
        <h2 className={styles.title}>Our Partners</h2>
        <div className={styles.grid}>
          {logos.map(name => (
            <div key={name} className={styles.logoCard} aria-label={name}>
              <img src={`https://via.placeholder.com/220x80?text=${encodeURIComponent(name)}`} alt={`${name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


