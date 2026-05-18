import styles from './SearchBar.module.css'

export default function SearchBar({ query, onQuery, total, filtered }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <h1 className={styles.heading}>Change Your Password on Any Website — Instantly</h1>
        <p className={styles.sub}>
          Skip the settings maze. One click takes you directly to the password change page
          of {total}+ popular platforms. Stay secure in seconds.
        </p>
      </div>

      <div className={styles.searchBox}>
        <span className={styles.searchIcon}>&#128269;</span>
        <input
          className={styles.input}
          type="search"
          placeholder="Search platforms — e.g. Facebook, Google, Netflix…"
          value={query}
          onChange={e => onQuery(e.target.value)}
          autoComplete="off"
          aria-label="Search platforms"
        />
        {query && (
          <button className={styles.clear} onClick={() => onQuery('')} aria-label="Clear search">✕</button>
        )}
      </div>

      {query && (
        <p className={styles.resultHint}>
          Showing <strong>{filtered}</strong> of {total} platforms
        </p>
      )}
    </div>
  )
}
