import React from 'react';
import styles from './Showcase.module.css';

const projects = [
  { title: 'Water Systems in Rural Kenya', img: 'https://via.placeholder.com/640x420?text=Water+Systems' },
  { title: 'Youth Empowerment in Brazil', img: 'https://via.placeholder.com/640x420?text=Youth+Empowerment' },
  { title: 'Community Gardens in Detroit', img: 'https://via.placeholder.com/640x420?text=Community+Gardens' },
];

const Showcase = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className={styles.header}>
          <h2>Showcase Your Impact</h2>
        </div>
        <div className={styles.grid}>
          {projects.map(({ title, img }) => (
            <article key={title} className={styles.card}>
              <img src={img} alt={title} />
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;


