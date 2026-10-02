import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'
import { projetos } from '../data/projetos.js'
import styles from './Home.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="wrap">
          <div className={styles.heroGrid}>
            <div>
              <p className="eyebrow">Tecnologia · Processos · Experiência do cliente</p>
              <h1>
                Oi, eu sou a Ana Paula Dossi. Conecto tecnologia, processos e experiência
                do cliente pra resolver <em>problema real</em>.
              </h1>
              <p className={styles.heroLead}>
                Gosto de entender problemas, organizar processos e encontrar formas de
                tornar o trabalho mais simples — seja com automação, código ou uma
                experiência melhor pra quem usa um produto. Minha trajetória passa por
                suporte técnico, operações e relacionamento com clientes; hoje também
                projeto e desenvolvo soluções digitais, como o Pontua.
              </p>
              <div className={styles.heroActions}>
                <Link to="/projetos" className="btn btn--primary">
                  Ver projetos
                </Link>
                <Link to="/sobre" className="btn btn--ghost">
                  Sobre mim
                </Link>
              </div>
            </div>
            <div className={styles.heroCard}>
              <span>Em foco</span>
              <div>
                <p className={styles.big}>Pontua</p>
                <p style={{ color: '#D7CFE8', margin: 0 }}>
                  Discovery → design system → produto em uso real
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Como eu trabalho</p>
              <h2>Da ideia à solução</h2>
            </div>
          </div>
          <div className={styles.focusGrid}>
            <div className={styles.focusCard}>
              <h3>Entender antes de fazer</h3>
              <p>
                Antes de pensar em uma solução, gosto de entender o problema, para quem
                estou construindo e o que realmente precisa ser resolvido.
              </p>
            </div>
            <div className={styles.focusCard}>
              <h3>Fazer acontecer</h3>
              <p>
                Com o problema mais claro, exploro possibilidades e uso tecnologia para
                transformar ideias em soluções práticas, sejam aplicações, automações ou
                melhorias em processos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <div>
              <p className="eyebrow">Projetos</p>
              <h2>Algumas coisas que tirei do papel</h2>
            </div>
            <Link to="/projetos" className="btn btn--ghost">
              Ver todos
            </Link>
          </div>
          <div className={styles.projectsGrid}>
            {projetos.map((p) => (
              <ProjectCard projeto={p} key={p.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
