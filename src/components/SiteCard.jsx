import * as SiIcons from 'react-icons/si'
import { FiStar, FiCopy } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import styles from './SiteCard.module.css'

export default function SiteCard({ site, status, onValidate, onOpenDetails, isFavorited, onToggleFavorite }) {
  const IconComponent = SiIcons[site.icon]

  const reportUrl = `mailto:?subject=Broken Link Report: ${encodeURIComponent(site.name)}&body=The password reset link for ${encodeURIComponent(site.name)} appears to be broken.%0A%0AURL: ${encodeURIComponent(site.pwUrl)}%0A%0APlease describe the issue:`

  const handleCopyLink = async (e) => {
    try {
      await navigator.clipboard.writeText(site.pwUrl)
      // Show brief visual feedback by changing button appearance
      if (e && e.currentTarget) {
        const btn = e.currentTarget
        btn.classList.add(styles.copied)
        setTimeout(() => {
          btn.classList.remove(styles.copied)
        }, 2000)
      }
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <div className={styles.icon} style={{ background: site.color }}>
          {IconComponent ? <IconComponent color="white" size={24} /> : <span>{site.name[0]}</span>}
        </div>
        <div className={styles.info}>
          <div className={styles.name}>{site.name}</div>
          <div className={styles.category}>{site.category}</div>
        </div>
        <button
          className={`${styles.favorite} ${isFavorited ? styles.favorited : ''}`}
          onClick={() => onToggleFavorite(site.id)}
          title={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
          aria-label="Toggle favorite"
        >
          <FiStar size={18} />
        </button>
        <span className={`${styles.status} ${styles[status || 'unknown']}`}>
          {status === 'ok' && 'Likely Working'}
          {status === 'issue' && 'Needs Review'}
          {status === 'checking' && 'Checking...'}
          {!status && 'Not Checked'}
        </span>
      </div>

      <div className={styles.actions}>
        <a
          className={`${styles.btn} ${styles.primary}`}
          href={site.pwUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reset / Change Password
        </a>
        <button className={`${styles.btn} ${styles.secondary}`} onClick={handleCopyLink}>
          <FiCopy size={14} style={{ marginRight: '4px' }} /> Copy Link
        </button>
        <button className={`${styles.btn} ${styles.secondary}`} onClick={() => onValidate(site)}>
          Validate Link
        </button>
        <button className={`${styles.btn} ${styles.secondary}`} onClick={() => onOpenDetails(site)}>
          View Recovery Steps
        </button>
        <Link className={`${styles.btn} ${styles.secondary}`} to={`/platform/${site.id}`}>
          SEO Guide Page
        </Link>
        <a
          className={`${styles.btn} ${styles.report}`}
          href={reportUrl}
          title="Report if this link is broken"
        >
          &#9888; Broken link?
        </a>
      </div>
    </div>
  )
}
