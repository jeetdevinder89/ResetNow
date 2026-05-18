import SiteCard from './SiteCard'
import styles from './ResultsGrid.module.css'

export default function ResultsGrid({
  sites,
  categories,
  activeCategory,
  onCategory,
  onValidateAll,
  validatingAll,
  linkStatuses,
  onValidateSite,
  onOpenDetails,
  favorites,
  onToggleFavorite,
}) {
  return (
    <div className={styles.wrapper}>
      {/* Category filter pills */}
      <div className={styles.filterBar}>
        <div className={styles.pills}>
          {categories.map(cat => (
            <button
              key={cat}
              className={`${styles.pill} ${activeCategory === cat ? styles.active : ''}`}
              onClick={() => onCategory(cat)}
            >{cat}</button>
          ))}
        </div>
        <button className={styles.validateBtn} onClick={onValidateAll} disabled={validatingAll || sites.length === 0}>
          {validatingAll ? 'Checking Visible Links...' : 'Validate Visible Links'}
        </button>
      </div>

      {sites.length === 0
        ? (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>🔍</div>
            <p>No platforms match your search.</p>
          </div>
        )
        : (
          <div className={styles.grid}>
            {sites.map(s => (
              <SiteCard
                key={s.id}
                site={s}
                status={linkStatuses[s.id]}
                onValidate={onValidateSite}
                onOpenDetails={onOpenDetails}
                isFavorited={favorites.includes(s.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        )
      }
    </div>
  )
}

