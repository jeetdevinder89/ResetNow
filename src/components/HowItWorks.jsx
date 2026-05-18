import styles from './HowItWorks.module.css'

const STEPS = [
  { num: 1, title: 'Enter Email',     desc: 'Type your email address in the search box.' },
  { num: 2, title: 'Scan Services',   desc: 'We check 35+ popular websites and data breach databases.' },
  { num: 3, title: 'Review Results',  desc: 'See every site your email is linked to, with breach alerts.' },
  { num: 4, title: 'Unsubscribe',     desc: 'Generate ready-to-send unsubscribe emails in one click.' },
]

export default function HowItWorks() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>How it works</h2>
      <div className={styles.grid}>
        {STEPS.map(s => (
          <div key={s.num} className={styles.card}>
            <div className={styles.num}>{s.num}</div>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
