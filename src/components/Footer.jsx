import { Link, useLocation } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.section}>
          <h4>PassGuard</h4>
          <p>Direct password reset links for 48+ popular platforms.</p>
        </div>

        <div className={styles.section}>
          <h4>Quick Links</h4>
          <nav className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>

        <div className={styles.section}>
          <h4>Legal</h4>
          <nav className={styles.nav}>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </nav>
        </div>

        <div className={styles.section}>
          <h4>Open Source</h4>
          <p>
            <a href="https://github.com/jeetdevinder89/PassGuard" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </p>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; 2026 PassGuard. All rights reserved. | No login required. No data stored. Free forever.</p>
      </div>
    </footer>
  )
}
