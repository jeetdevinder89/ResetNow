import { useEffect } from 'react'
import styles from './Modal.module.css'

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    function handleKey(e) { if (e.key === 'Escape') onClose() }
    if (open) window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className={`${styles.overlay} ${open ? styles.open : ''}`} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>
  )
}
