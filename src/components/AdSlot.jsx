import { useEffect, useRef } from 'react'
import styles from './AdSlot.module.css'

const PUBLISHER_ID = 'ca-pub-2770089511325323'

export default function AdSlot({ slot = '0000000000', format = 'auto', style = {}, label = 'Advertisement' }) {
  const pushed = useRef(false)

  useEffect(() => {
    if (pushed.current) return
    try {
      if (typeof window !== 'undefined' && window.adsbygoogle) {
        window.adsbygoogle.push({})
        pushed.current = true
      }
    } catch {
      // AdSense script not yet loaded
    }
  }, [])

  // Show labelled placeholder in development so layout is visible
  if (import.meta.env.DEV) {
    return (
      <div className={styles.placeholder} style={style}>
        <span className={styles.label}>{label}</span>
        <span className={styles.sub}>Google AdSense — {format}</span>
      </div>
    )
  }

  return (
    <div className={styles.wrapper} style={style}>
      <p className={styles.adLabel}>Advertisement</p>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={PUBLISHER_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}
