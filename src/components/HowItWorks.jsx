import React from 'react';
import styles from './HowItWorks.module.css';

const items = [
  { title: 'Connect', text: 'We connect community leaders with experts and resources.', icon: '🔗' },
  { title: 'Collaborate', text: 'We facilitate collaboration to design effective solutions.', icon: '🤝' },
  { title: 'Impact', text: 'We support implementation and measure impact.', icon: '📈' },
];

const HowItWorks = () => {
  return (
    <section id="how" className="section">
      <div className="container">
        <h2 className={styles.title}>How NECTICA Works</h2>
        <div className={styles.row}>
          {items.map(({ title, text, icon }) => (
            <div key={title} className={styles.card}>
              <div className={styles.icon}>{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


