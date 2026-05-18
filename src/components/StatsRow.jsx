import styles from './StatsRow.module.css'

export default function StatsRow({ total, categories }) {
  return (
    <div className={styles.grid}>
      <StatCard value={total}      label="Platforms"   color="primary" />
      <StatCard value={categories} label="Categories"  color="success" />
      <StatCard value="100%"       label="Free"        color="warning" />
      <StatCard value="0"          label="Data Stored" color="safe"   />
    </div>
  )
}

function StatCard({ value, label, color }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.num} ${styles[color]}`}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  )
}
