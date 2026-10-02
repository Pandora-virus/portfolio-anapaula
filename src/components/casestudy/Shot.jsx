import styles from './CaseStudy.module.css'

export default function Shot({ label, src, alt }) {
  return (
    <div className={styles.shot}>
      {src ? <img src={src} alt={alt || label} /> : <span>{label}</span>}
    </div>
  )
}
