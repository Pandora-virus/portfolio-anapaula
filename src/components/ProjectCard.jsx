import { Link } from 'react-router-dom'
import styles from './ProjectCard.module.css'

export default function ProjectCard({ projeto }) {
  return (
    <Link to={`/projetos/${projeto.slug}`} className={styles.card}>
      <div className={styles.media} style={{ background: projeto.cor }}>
        {projeto.titulo}
      </div>
      <div className={styles.body}>
        <div className={styles.tags}>
          {projeto.categorias.map((c) => (
            <span className="tag" key={c}>
              {c}
            </span>
          ))}
        </div>
        <h3>{projeto.titulo}</h3>
        <p className={styles.sub}>
          {projeto.ano} · {projeto.status}
        </p>
        <p>{projeto.subtitulo}</p>
      </div>
    </Link>
  )
}
