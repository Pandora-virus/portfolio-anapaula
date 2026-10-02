import { Link } from 'react-router-dom'
import CaseStudyHero from '../components/casestudy/CaseStudyHero.jsx'
import Section from '../components/casestudy/Section.jsx'
import Swatch from '../components/casestudy/Swatch.jsx'
import Shot from '../components/casestudy/Shot.jsx'
import styles from '../components/casestudy/CaseStudy.module.css'
import shotCatalogo from '../assets/pontua/catalogo.png'
import shotPedidos from '../assets/pontua/pedidos.png'
import shotPrecificacao from '../assets/pontua/precificacao.png'
import shotFinanceiro from '../assets/pontua/financeiro.png'

const cores = [
  { nome: 'Roxo — primária', hex: '#5F41B4' },
  { nome: 'Verde-água — produção', hex: '#5CBDAD' },
  { nome: 'Magenta — acento', hex: '#B82262' },
  { nome: 'Mostarda — informação', hex: '#e2b708' },
  { nome: 'Turquesa', hex: '#75E0E0' },
  { nome: 'Cru', hex: '#F5EDE0' },
]

export default function ProjetoPontua() {
  return (
    <>
      <CaseStudyHero
        cor="#5F41B4"
        categorias={['Product Design', 'Pesquisa', 'Full Stack']}
        titulo="Pontua"
        subtitulo="Um assistente de ateliê para artesãs de crochê — precificação, pedidos, agenda e financeiro, construído a partir de pesquisa real com usuárias."
        meta={[
          { label: 'Papel', value: 'Product design + full stack' },
          { label: 'Período', value: '2025 – em andamento' },
          { label: 'Stack', value: 'React, Node, Prisma, MySQL' },
          { label: 'Status', value: 'Em produção, uso real' },
        ]}
      />

      <div className={`wrap ${styles.body}`}>
        <Section
          eyebrow="O problema"
          title="Crochê organizado em caderno, memória e WhatsApp"
          lead="A maioria das artesãs não usa planilha nem sistema algum hoje. O resultado: esquecem prazos, não sabem quanto realmente lucram e não sabem quanto cobrar — precificar a peça é, disparado, a maior dor."
        />

        <Section eyebrow="Pesquisa" title="O que a pesquisa com usuárias mostrou">
          <div className={styles.cardList}>
            <div>
              <h4>Duas realidades no mesmo público</h4>
              <p>
                Hobby, renda extra e quem está começando somam mais do que quem vive
                exclusivamente do crochê — o produto precisa ser simples pra iniciante, mas
                útil pra quem já vende de verdade.
              </p>
            </div>
            <div>
              <h4>Não existe fórmula única de preço</h4>
              <p>
                Cada artesã calcula do seu jeito (quando calcula). Isso definiu uma regra de
                produto: o Pontua ensina e orienta, nunca impõe uma fórmula como "a certa".
              </p>
            </div>
            <div>
              <h4>Prioridade validada pela própria pesquisa</h4>
              <p>
                Agenda/prazos de entrega foi a funcionalidade mais desejada, seguida de
                precificação inteligente, catálogo de peças e controle financeiro — ninguém
                respondeu que não usaria o app.
              </p>
            </div>
          </div>
        </Section>

        <Section eyebrow="Personas" title="Duas artesãs, um mesmo app">
          <div className={styles.twoCol}>
            <div className={styles.cardList}>
              <div>
                <h4>Artesã iniciante</h4>
                <p>
                  Faz por hobby, está começando a vender, nunca organizou um negócio. Precisa
                  de interface simples, poucos cliques e automação — o app calcula, ela não
                  precisa saber a fórmula de cor.
                </p>
              </div>
            </div>
            <div className={styles.cardList}>
              <div>
                <h4>Artesã empreendedora</h4>
                <p>
                  Renda extra ou principal do crochê, produz com frequência, recebe vários
                  pedidos ao mesmo tempo. Quer entender o lucro real e ter histórico de peças
                  e pedidos.
                </p>
              </div>
            </div>
          </div>
          <p style={{ marginTop: 16 }}>
            As duas convivem na mesma tela — resolvido com <em>progressive disclosure</em>:
            telas simples por padrão, com campos avançados (custos do ateliê, markup manual)
            disponíveis, mas nunca obrigatórios.
          </p>
        </Section>

        <Section
          eyebrow="Conceito de produto"
          title="Catálogo ≠ Pedido"
          lead="A decisão estrutural mais importante do Pontua: separar o modelo da peça da venda em si, pra artesã nunca precisar recadastrar a mesma peça duas vezes."
        >
          <div className={styles.twoCol}>
            <div className={styles.cardList}>
              <div>
                <h4>Catálogo</h4>
                <p>
                  O modelo da peça — fotos, receita, ficha técnica (agulha, fio, quantidade
                  de novelos), tempo médio de produção, custo e preço sugerido. Cadastrado
                  uma vez, reutilizado em vários pedidos.
                </p>
              </div>
            </div>
            <div className={styles.cardList}>
              <div>
                <h4>Pedido</h4>
                <p>
                  A venda de uma peça do catálogo para um cliente específico — cor escolhida,
                  prazo, status e valor. A mesma peça do catálogo pode gerar vários pedidos
                  diferentes.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.flow} style={{ marginTop: 24 }}>
            {['Novo pedido', 'Cliente', 'Peça do catálogo', 'Preço', 'Prazo', 'Produção', 'Entregue'].map(
              (step, i, arr) => (
                <span key={step} style={{ display: 'contents' }}>
                  <span className={styles.flowStep}>{step}</span>
                  {i < arr.length - 1 && <span className={styles.flowArrow}>→</span>}
                </span>
              ),
            )}
          </div>
        </Section>

        <Section
          eyebrow="Design system"
          title="Uma paleta com papel semântico, não decoração"
          lead="Roxo é tinta (texto, título, preço). Verde-água é produção. Magenta é acento — ações como “enviar pedido”. Mostarda é só informação — markup, badges de status. Cada cor tem um trabalho específico."
        >
          <div className={styles.swatchRow}>
            {cores.map((c) => (
              <Swatch key={c.hex} nome={c.nome} hex={c.hex} />
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            Tipografia combina uma serifada (<strong>Iowan Old Style</strong>) para títulos e
            valores de destaque com uma sans (<strong>Trebuchet MS</strong>) para interface —
            e o sistema inclui tema escuro completo, trocado manualmente pela artesã (nunca
            automático: ela precisa julgar a cor do fio na tela sem o app mudar sozinho).
          </p>
        </Section>

        <Section eyebrow="Produto hoje" title="Da ideia ao uso real">
          <p className={styles.sectionLead}>
            Além do MVP original (clientes, catálogo, pedidos, agenda, precificação,
            financeiro), o produto ganhou módulos que a própria pesquisa e o uso real foram
            revelando: valor-hora com 4 métodos de cálculo, produção com cronômetro,
            desconto e inadimplência por pedido, estoque de peças e materiais, e um módulo
            de Ateliê — um wizard guiado de criação de peça com uma engine própria de formas
            geométricas para amigurumi.
          </p>
          <div className={styles.shotGrid}>
            <Shot src={shotCatalogo} alt="Tela do catálogo do Pontua" />
            <Shot src={shotPedidos} alt="Tela de pedidos do Pontua" />
            <Shot src={shotPrecificacao} alt="Detalhamento de precificação de uma peça" />
            <Shot src={shotFinanceiro} alt="Tela de financeiro do Pontua" />
          </div>
        </Section>

        <Section eyebrow="Aprendizados" title="O que esse projeto me ensinou">
          <p className={styles.sectionLead}>
            Que "ensinar antes de pedir" é uma restrição de design tão forte quanto
            qualquer requisito técnico — e que um design system só vira fonte da verdade
            quando o código é obrigado a concordar com ele, não o contrário.
          </p>
        </Section>

        <div className={styles.footerNav}>
          <Link to="/projetos/raiz-cafe" className="btn btn--ghost">
            ← Raiz Café
          </Link>
          <Link to="/projetos" className="btn btn--ghost">
            Todos os projetos
          </Link>
        </div>
      </div>
    </>
  )
}
