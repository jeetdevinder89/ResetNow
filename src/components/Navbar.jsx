import { FiMoon, FiSun } from 'react-icons/fi'
import styles from './Navbar.module.css'

export default function Navbar({ isDarkMode, onToggleDarkMode }) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>RN</span> ResetNow
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
