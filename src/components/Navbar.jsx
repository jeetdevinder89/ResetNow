import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <span className={styles.logoIcon}>PG</span> PassGuard
      </div>
      <span className={styles.badge}>Free · No Login</span>
    </nav>
  )
}
