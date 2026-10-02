import { Link } from 'react-router-dom'
import CaseStudyHero from '../components/casestudy/CaseStudyHero.jsx'
import Section from '../components/casestudy/Section.jsx'
import Shot from '../components/casestudy/Shot.jsx'
import styles from '../components/casestudy/CaseStudy.module.css'
import shotHome from '../assets/raiz-cafe/home.png'
import shotCatalogo from '../assets/raiz-cafe/catalogo.png'
import shotSuporte from '../assets/raiz-cafe/suporte.png'

export default function ProjetoRaizCafe() {
  return (
    <>
      <CaseStudyHero
        cor="#6B4226"
        categorias={['UX/UI Design', 'Front-end', 'Bootcamp 2023']}
        titulo="Raiz Café"
        subtitulo="E-commerce para um pequeno negócio familiar de café, criado em grupo num bootcamp, sob orientação da professora Laura Campos."
        meta={[
          { label: 'Papel', value: 'UX/UI + front-end' },
          { label: 'Período', value: '2023' },
          { label: 'Equipe', value: 'Trabalho em grupo' },
          { label: 'Stack', value: 'HTML/CSS/JS, Node, Prisma' },
        ]}
      />

      <div className={`wrap ${styles.body}`}>
        <Section
          eyebrow="Contexto"
          title="Um negócio rural que precisava ultrapassar as fronteiras do estado"
          lead="O cliente é um pequeno negócio rural familiar, cujo filho enxergou uma oportunidade de crescimento. Diante da necessidade de ampliar o alcance regional e ultrapassar as fronteiras do estado, a família decidiu dar o salto para o mundo digital."
        />

        <Section
          eyebrow="Objetivo"
          title="Divulgar, vender e fortalecer a marca da família"
          lead="Desenvolver uma solução digital que facilitasse a divulgação, aumentasse os lucros, fortalecesse a marca da família, estabelecesse um canal direto de comunicação com os clientes, promovesse produtos especiais e assegurasse a estabilidade financeira do negócio."
        />

        <Section
          eyebrow="Solução"
          title="Um e-commerce de ponta a ponta"
          lead="A solução envolveu a criação de um e-commerce onde o produtor divulga o negócio e vende produtos — especialmente café — diretamente aos clientes. Isso incluiu a criação do site, a logística de entrega, marketing digital, canal de feedback dos clientes e gestão de marca."
        />

        <Section eyebrow="Processo" title="Fonte, paleta e público antes de qualquer tela">
          <p className={styles.sectionLead}>
            Definimos logo no início os elementos que serviriam como ponto de partida do
            projeto: escolha da fonte, paleta de cores, logotipo e identificação do público-
            alvo. Com uma compreensão clara de quem queríamos atingir, conseguimos concentrar
            o time nos aspectos essenciais do site — um processo mais eficiente, com um
            resultado final direcionado às necessidades reais do público.
          </p>
        </Section>

        <Section eyebrow="Telas" title="Catálogo, produtos e suporte">
          <p className={styles.sectionLead}>
            O site final reúne home, catálogo de produtos (cafés de colheita natural,
            montanha dourada, vale do Douro e reserva da família, além de kits e filtros),
            página sobre e canal de suporte/ajuda.
          </p>
          <div className={styles.shotGrid}>
            <Shot src={shotHome} alt="Home do Raiz Café" />
            <Shot src={shotCatalogo} alt="Catálogo de produtos do Raiz Café" />
            <Shot src={shotSuporte} alt="Página de suporte e ajuda do Raiz Café" />
          </div>
        </Section>

        <Section eyebrow="Aprendizados" title="O que esse projeto me ensinou">
          <p className={styles.sectionLead}>
            Foi meu primeiro projeto definindo identidade visual e público-alvo do zero, em
            grupo, com prazo de bootcamp — a base de processo que carrego até hoje em
            projetos como o Pontua: antes de desenhar tela, entender pra quem é.
          </p>
        </Section>

        <div className={styles.footerNav}>
          <Link to="/projetos/pontua" className="btn btn--ghost">
            ← Pontua
          </Link>
          <Link to="/projetos/automacao-aefetiva" className="btn btn--ghost">
            Automação de processos →
          </Link>
        </div>
      </div>
    </>
  )
}
