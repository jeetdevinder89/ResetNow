import Modal from './Modal'
import styles from './BreachModal.module.css'

export default function BreachModal({ site, open, onClose }) {
  if (!site || !site.breach) return null
  const b = site.breach
  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.title}>⚠️ {site.name} — Data Breach</div>
      <div className={styles.sub}>Your email was found in this data breach. Review the exposed data and take action.</div>
      <div className={styles.detail}>
        <p><strong>Breach date:</strong> {b.date}</p>
        <p><strong>Records exposed:</strong> {b.records}</p>
        <p><strong>Data compromised:</strong> {b.data}</p>
        <p className={styles.tip}>🔑 Change your password for this service immediately. Use a unique password for every site — consider Bitwarden or 1Password.</p>
      </div>
      <div className={styles.actions}>
        <button className={styles.closeBtn} onClick={onClose}>Close</button>
      </div>
    </Modal>
  )
}
