import { Link } from 'react-router-dom'
import CaseStudyHero from '../components/casestudy/CaseStudyHero.jsx'
import Section from '../components/casestudy/Section.jsx'
import styles from '../components/casestudy/CaseStudy.module.css'

export default function ProjetoSuporteTecnico() {
  return (
    <>
      <CaseStudyHero
        cor="#55524B"
        categorias={['Suporte técnico', 'APIs REST']}
        titulo="Suporte técnico e integrações"
        subtitulo="Investigação de falhas, análise de integrações e acompanhamento de chamados técnicos."
        meta={[
          { label: 'Papel', value: 'Suporte técnico e diagnóstico' },
          { label: 'Foco', value: 'Causa raiz e integrações' },
          { label: 'Ferramentas', value: 'APIs REST' },
          { label: 'Tipo', value: 'Experiência profissional' },
        ]}
      />

      <div className={`wrap ${styles.body}`}>
        <Section
          eyebrow="Contexto"
          title="Falhas que cruzam áreas e sistemas diferentes"
          lead="Chamados técnicos raramente têm uma causa óbvia — o problema relatado por quem usa o sistema costuma ser só o sintoma, e a causa real está numa integração, numa API ou numa etapa anterior do processo."
        />

        <Section
          eyebrow="Abordagem"
          title="Conectar informação até a causa raiz"
          lead="Experiência na investigação de falhas, análise de integrações via APIs REST e acompanhamento de chamados técnicos, conectando informações de diferentes áreas para chegar à causa dos problemas e apoiar sua resolução."
        />

        <Section eyebrow="O que isso treinou" title="Diagnóstico como hábito de trabalho">
          <p className={styles.sectionLead}>
            É a mesma lógica que aplico hoje em produto e em automação: antes de propor
            solução, entender exatamente onde e por que o processo está quebrando.
          </p>
        </Section>

        <div className={styles.footerNav}>
          <Link to="/projetos/automacao-aefetiva" className="btn btn--ghost">
            ← Automação de processos
          </Link>
          <Link to="/projetos" className="btn btn--ghost">
            Todos os projetos
          </Link>
        </div>
      </div>
    </>
  )
}
