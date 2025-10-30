import React from 'react';
import styles from './SiteFooter.module.css';

const LinkLike = ({ href, className, children }) => {
  const isValid = typeof href === 'string' && href !== '' && href !== '#';
  if (isValid) {
    return (
      <a className={className} href={href}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={`${className} ${styles.buttonLike}`} aria-label={typeof children === 'string' ? children : undefined}>
      {children}
    </button>
  );
};

const SiteFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.cta} id="donate">
          <h3>Make a difference today!</h3>
          <div className={styles.row}>
            <LinkLike className={styles.btnPrimary} href="">Donate</LinkLike>
            <LinkLike className={styles.btnGhost} href="#involved">Volunteer</LinkLike>
            <LinkLike className={styles.btnGhost} href="">Contact Us</LinkLike>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} NECTICA. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;


