import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('resetnow_cookie_consent')
    if (!consent) {
      // Slight delay so the page renders first
      const t = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem('resetnow_cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('resetnow_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className={styles.banner} role="dialog" aria-label="Cookie consent">
      <div className={styles.inner}>
        <div className={styles.text}>
          <strong>🍪 We use cookies</strong>
          <p>
            ResetNow uses cookies to keep your preferences and to show relevant ads via{' '}
            <strong>Google AdSense</strong>. By clicking <em>Accept</em>, you consent to our use
            of cookies as described in our{' '}
            <Link to="/privacy-policy" className={styles.link}>Privacy Policy</Link>.
          </p>
        </div>
        <div className={styles.actions}>
          <button className={styles.decline} onClick={decline}>Decline</button>
          <button className={styles.accept} onClick={accept}>Accept All</button>
        </div>
      </div>
    </div>
  )
}
