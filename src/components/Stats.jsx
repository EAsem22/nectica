import React from 'react';
import styles from './Stats.module.css';

const metrics = [
  { label: 'Countries', value: '10+' },
  { label: 'Projects', value: '200+' },
  { label: 'Communities', value: '50+' },
  { label: 'Volunteers', value: '1000+' },
];

const Stats = () => {
  return (
    <section id="impact" className={`${styles.sectionAlt} section`}>
      <div className="container">
        <h2 className={styles.title}>Our Growing Impact</h2>
        <div className={styles.grid}>
          {metrics.map(m => (
            <div key={m.label} className={styles.item}>
              <div className={styles.value}>{m.value}</div>
              <div className={styles.label}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;


