import styles from './CaseStudy.module.css'

export default function CaseStudyHero({ cor, categorias, titulo, subtitulo, meta }) {
  return (
    <>
      <section className={styles.heroSection} style={{ background: cor }}>
        <div className="wrap">
          <div className={styles.heroInner}>
            <div className={styles.tags}>
              {categorias.map((c) => (
                <span
                  key={c}
                  style={{
                    background: 'rgba(255,255,255,0.18)',
                    color: '#fff',
                  }}
                  className="tag"
                >
                  {c}
                </span>
              ))}
            </div>
            <h1>{titulo}</h1>
            <p className={styles.heroLead}>{subtitulo}</p>
          </div>
        </div>
      </section>
      <div className="wrap">
        <div className={styles.metaBar}>
          {meta.map((m) => (
            <div className={styles.metaItem} key={m.label}>
              <p className="eyebrow">{m.label}</p>
              <p>{m.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
