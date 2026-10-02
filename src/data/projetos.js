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
]

export const getProjeto = (slug) => projetos.find((p) => p.slug === slug)
