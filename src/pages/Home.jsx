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
              <p className="eyebrow">Product design · Desenvolvimento full stack</p>
              <h1>
                Oi, eu sou a Ana Paula. Transformo <em>problema real</em> em produto que
                funciona — do discovery ao código.
              </h1>
              <p className={styles.heroLead}>
                Projeto, pesquiso e construo produtos digitais de ponta a ponta. Aqui estão
                dois exemplos: o Pontua, um assistente de ateliê pra artesãs de crochê que
                levei de ideia a sistema em produção, e o Raiz Café, um e-commerce feito em
                bootcamp pra tirar um negócio familiar do papel.
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
              <p className="eyebrow">O que eu faço</p>
              <h2>Design e código, na mesma pessoa</h2>
            </div>
          </div>
          <div className={styles.focusGrid}>
            <div className={styles.focusCard}>
              <h3>Design</h3>
              <p>
                Pesquisa com usuárias, discovery, personas, fluxos de UX e design system —
                tokens de cor, tipografia e componentes documentados, não só telas soltas.
              </p>
            </div>
            <div className={styles.focusCard}>
              <h3>Código</h3>
              <p>
                Front-end em React e back-end em Node/Express com banco relacional —
                suficiente pra sair do protótipo e virar produto que uma pessoa usa de
                verdade todos os dias.
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
              <h2>O que eu já construí</h2>
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
