import styles from './CaseStudy.module.css'

export default function Swatch({ nome, hex }) {
  return (
    <div className={styles.swatch}>
      <div className={styles.swatchColor} style={{ background: hex }} />
      <strong>{nome}</strong>
      <span>{hex}</span>
    </div>
  )
}
