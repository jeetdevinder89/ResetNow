import { FiMoon, FiSun } from 'react-icons/fi'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar({ isDarkMode, onToggleDarkMode }) {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <span className={styles.logoIcon}>RN</span> ResetNow
      </Link>

      <div className={styles.links}>
        <NavLink to="/" end className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>About</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>Contact</NavLink>
        <NavLink to="/privacy-policy" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>Privacy Policy</NavLink>
        <NavLink to="/terms" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}>Terms</NavLink>
      </div>

      <div className={styles.right}>
        <button
          className={styles.themeToggle}
          onClick={onToggleDarkMode}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
        <span className={styles.badge}>Free · No Login</span>
      </div>
    </nav>
  )
}
