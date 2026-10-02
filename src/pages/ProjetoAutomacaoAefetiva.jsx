import { Link } from 'react-router-dom'
import CaseStudyHero from '../components/casestudy/CaseStudyHero.jsx'
import Section from '../components/casestudy/Section.jsx'
import styles from '../components/casestudy/CaseStudy.module.css'

export default function ProjetoAutomacaoAefetiva() {
  return (
    <>
      <CaseStudyHero
        cor="#2B5F7A"
        categorias={['Automação', 'Dados']}
        titulo="Automação de processos"
        subtitulo="Redução do trabalho manual de consolidação de dados para relatórios de gestão, na Aefetiva."
        meta={[
          { label: 'Papel', value: 'Automação e análise de dados' },
          { label: 'Empresa', value: 'Aefetiva' },
          { label: 'Stack', value: 'Python, SQL, Excel, Pandas' },
          { label: 'Resultado', value: '~4h/dia economizadas' },
        ]}
      />

      <div className={`wrap ${styles.body}`}>
        <Section
          eyebrow="Contexto"
          title="Consolidação de dados feita manualmente"
          lead="A geração de relatórios de gestão dependia de um trabalho manual de consolidação de dados de diferentes fontes — repetitivo e sujeito a erro, tomando uma parte relevante do dia de trabalho."
        />

        <Section
          eyebrow="Solução"
          title="Automação com Python, SQL e Pandas"
          lead="Desenvolvi uma automação para reduzir o trabalho manual de consolidação de dados e apoiar a geração dos relatórios de gestão — substituindo etapas repetitivas por um processo recorrente e confiável."
        />

        <Section eyebrow="Resultado" title="Cerca de 4 horas por dia economizadas">
          <p className={styles.sectionLead}>
            A solução reduziu em aproximadamente quatro horas por dia o tempo dedicado à
            atividade manual, liberando tempo para análise das informações em vez de
            consolidação.
          </p>
        </Section>

        <div className={styles.footerNav}>
          <Link to="/projetos/raiz-cafe" className="btn btn--ghost">
            ← Raiz Café
          </Link>
          <Link to="/projetos/suporte-tecnico" className="btn btn--ghost">
            Suporte técnico e integrações →
          </Link>
        </div>
      </div>
    </>
  )
}
