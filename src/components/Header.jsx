import React, { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}> 
            <a href="#top" className={styles.brand}>
              <span className={styles.logoBox}>N</span>
              <span className={styles.brandText}>NECTICA</span>
            </a>
            <nav className={styles.leftNav}>
              <a href="#projects" className={styles.link}>Showcase</a>
              <a href="#involved" className={styles.link}>Community</a>
              <a href="#how" className={styles.link}>Designers</a>
            </nav>
          </div>

          <button
            className={styles.menuButton}
            aria-label="Toggle navigation"
            onClick={() => setOpen(v => !v)}
          >
            <span className={styles.menuIcon} />
          </button>

          <nav className={styles.rightNav}>
            <a href="/login" className={styles.link}>Sign in</a>
            <a href="/signup" className={styles.donate}>Get started</a>
          </nav>

          {/* mobile dropdown for left links */}
          <nav className={`${styles.navMobile} ${open ? styles.navOpen : ''}`}>
            <a href="#projects" className={styles.link}>Showcase</a>
            <a href="#involved" className={styles.link}>Community</a>
            <a href="#how" className={styles.link}>Designers</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;


