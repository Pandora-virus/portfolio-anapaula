import ProjectCard from '../components/ProjectCard.jsx'
import { projetos } from '../data/projetos.js'
import styles from './Projetos.module.css'

export default function Projetos() {
  return (
    <div className={styles.page}>
      <div className="wrap">
        <div className={styles.head}>
          <p className="eyebrow">Projetos</p>
          <h1>Discovery, decisões de design e o código por trás de cada um</h1>
          <p>
            Cada case study aqui mostra o processo completo: o problema que motivou o
            projeto, a pesquisa, as decisões de design e como isso virou produto.
          </p>
        </div>
        <div className={styles.grid}>
          {projetos.map((p) => (
            <ProjectCard projeto={p} key={p.slug} />
          ))}
        </div>
      </div>
    </div>
  )
}
