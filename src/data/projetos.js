export const projetos = [
  {
    slug: 'pontua',
    titulo: 'Pontua',
    subtitulo: 'Assistente de ateliê para artesãs de crochê',
    descricaoCurta:
      'Precificação, pedidos, agenda e financeiro para quem vive (ou começa a viver) do crochê — pesquisa com usuárias, discovery e um design system próprio.',
    categorias: ['Product Design', 'Full Stack', 'Pesquisa'],
    cor: '#5F41B4',
    ano: '2025–2026',
    status: 'Em produção, uso real',
  },
  {
    slug: 'raiz-cafe',
    titulo: 'Raiz Café',
    subtitulo: 'E-commerce para um pequeno produtor rural de café',
    descricaoCurta:
      'Projeto de bootcamp (2023): levar um negócio familiar de café para o digital, da definição de marca ao catálogo de produtos.',
    categorias: ['UX/UI Design', 'Front-end', 'Bootcamp'],
    cor: '#6B4226',
    ano: '2023',
    status: 'Projeto acadêmico, em grupo',
  },
  {
    slug: 'automacao-aefetiva',
    titulo: 'Automação de processos',
    subtitulo: 'Redução de trabalho manual de consolidação de dados — Aefetiva',
    descricaoCurta:
      'Automação com Python e SQL que reduziu em aproximadamente 4 horas por dia o tempo dedicado à consolidação manual de dados para relatórios de gestão.',
    categorias: ['Automação', 'Dados'],
    cor: '#2B5F7A',
    ano: 'Aefetiva',
    status: 'Experiência profissional',
  },
  {
    slug: 'suporte-tecnico',
    titulo: 'Suporte técnico e integrações',
    subtitulo: 'Investigação de falhas e análise de causa raiz',
    descricaoCurta:
      'Investigação de falhas, análise de integrações via APIs REST e acompanhamento de chamados técnicos, conectando informações de diferentes áreas até a causa raiz dos problemas.',
    categorias: ['Suporte técnico', 'APIs REST'],
    cor: '#55524B',
    ano: 'Experiência profissional',
    status: 'Diagnóstico e análise de causa raiz',
  },
]

export const getProjeto = (slug) => projetos.find((p) => p.slug === slug)
