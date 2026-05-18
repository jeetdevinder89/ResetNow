import { useState } from 'react'
import Modal from './Modal'
import { generateUnsubEmail } from '../data/services'
import styles from './UnsubModal.module.css'

export default function UnsubModal({ site, email, open, onClose }) {
  const [copied, setCopied] = useState(false)

  if (!site) return null
  const body = generateUnsubEmail(site, email)

  function handleCopy() {
    navigator.clipboard.writeText(body).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function handleMailto() {
    const subject = encodeURIComponent(`Request to Unsubscribe — ${email}`)
    const bodyEnc = encodeURIComponent(body)
    window.open(`mailto:${site.unsubEmail}?subject=${subject}&body=${bodyEnc}`)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.title}>Unsubscribe from {site.name}</div>
      <div className={styles.sub}>Copy this email and send it to complete your unsubscribe request.</div>
      <textarea className={styles.textarea} readOnly value={body} />
      <div className={styles.to}>Send to: <span className={styles.toAddr}>{site.unsubEmail}</span></div>
      <div className={styles.actions}>
        <button className={`${styles.btn} ${styles.ghost}`} onClick={onClose}>Close</button>
        <button className={`${styles.btn} ${styles.primary} ${copied ? styles.copied : ''}`} onClick={handleCopy}>
          {copied ? '✅ Copied!' : '📋 Copy Email'}
        </button>
        <button className={`${styles.btn} ${styles.primary}`} onClick={handleMailto}>📨 Open Mail App</button>
      </div>
    </Modal>
  )
}
