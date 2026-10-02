import styles from './CaseStudy.module.css'

export default function Section({ eyebrow, title, lead, children }) {
  return (
    <div className={styles.section}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      {lead && <p className={styles.sectionLead}>{lead}</p>}
      {children}
    </div>
  )
}
