import AdSlot from './AdSlot'
import styles from './PageAdsLayout.module.css'

export default function PageAdsLayout({ children }) {
  return (
    <>
      <div className={styles.topBanner}>
        <AdSlot slot="3333333333" format="horizontal" label="Page Top Banner Ad" style={{ minHeight: 90 }} />
      </div>

      <div className={styles.layout}>
        <aside className={`${styles.sideAd} ${styles.left}`}>
          <AdSlot slot="1111111111" format="vertical" label="Left Sidebar Ad" style={{ width: 160, minHeight: 600 }} />
        </aside>

        <div className={styles.mainColumn}>
          {children}
          <div className={styles.bottomBanner}>
            <AdSlot slot="4444444444" format="horizontal" label="Page Bottom Banner Ad" style={{ minHeight: 90 }} />
          </div>
        </div>

        <aside className={`${styles.sideAd} ${styles.right}`}>
          <AdSlot slot="2222222222" format="vertical" label="Right Sidebar Ad" style={{ width: 160, minHeight: 600 }} />
        </aside>
      </div>
    </>
  )
}
