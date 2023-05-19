// CORE
import * as React from 'react';

// STYLE
import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <p>
          <span>React + TS To-Do</span> &copy; 2023
        </p>
      </footer>
    );
};

export default Footer;
