import * as SiIcons from 'react-icons/si'
import styles from './PlatformDrawer.module.css'
import { getRecoverySteps } from '../data/recoverySteps'

export default function PlatformDrawer({ site, status, onClose, onValidate }) {
  if (!site) return null

  const IconComponent = SiIcons[site.icon]
  const steps = getRecoverySteps(site)
  const reportUrl = `mailto:?subject=Broken Link Report: ${encodeURIComponent(site.name)}&body=The password reset link for ${encodeURIComponent(site.name)} appears to be broken.%0A%0AURL: ${encodeURIComponent(site.pwUrl)}%0A%0APlease describe the issue:`

  return (
    <div className={styles.overlay} onClick={onClose}>
      <aside className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close details">x</button>

        <div className={styles.head}>
          <div className={styles.icon} style={{ background: site.color }}>
            {IconComponent ? <IconComponent color="white" size={22} /> : <span>{site.name[0]}</span>}
          </div>
          <div>
            <h2 className={styles.title}>{site.name}</h2>
            <p className={styles.subtitle}>{site.category}</p>
          </div>
        </div>

        <div className={styles.badgeRow}>
          <span className={`${styles.badge} ${styles[status || 'unknown']}`}>
            {status === 'ok' && 'Link Status: Likely Working'}
            {status === 'issue' && 'Link Status: Needs Review'}
            {status === 'checking' && 'Link Status: Checking...'}
            {!status && 'Link Status: Not Checked'}
          </span>
        </div>

        <div className={styles.actions}>
          <a className={styles.primary} href={site.pwUrl} target="_blank" rel="noopener noreferrer">Open Reset Link</a>
          <button className={styles.secondary} onClick={() => onValidate(site)}>Validate Link</button>
          <a className={styles.report} href={reportUrl}>Report Broken Link</a>
        </div>

        <h3 className={styles.sectionTitle}>Recovery Steps</h3>
        <ol className={styles.steps}>
          {steps.map((step, idx) => <li key={idx}>{step}</li>)}
        </ol>
      </aside>
    </div>
  )
}
