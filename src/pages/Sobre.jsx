import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <div className={styles.page}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <p className="eyebrow">Sobre</p>
            <h1>Ana Paula Dossi</h1>
            <p>
              Sou formada em Análise e Desenvolvimento de Sistemas e tenho experiência com
              suporte técnico, operações e relacionamento com clientes.
            </p>
            <p>
              Ao longo da minha trajetória, trabalhei na resolução de problemas técnicos,
              no acompanhamento de demandas e na identificação de oportunidades para
              melhorar processos. Também desenvolvi automações com Python e SQL para
              reduzir tarefas manuais e facilitar a análise de informações.
            </p>
            <p>
              Gosto de entender o contexto antes de pensar em uma solução. Para mim,
              tecnologia faz sentido quando resolve um problema de verdade, melhora a
              rotina de alguém ou torna um processo mais eficiente.
            </p>
            <p>
              É essa combinação de visão técnica, organização e comunicação que quero
              levar para os próximos projetos — hoje, isso também passa por projetar e
              desenvolver soluções digitais, como o Pontua.
            </p>
            <div className={styles.contactActions}>
              <a href="mailto:anaaninha94@gmail.com" className="btn btn--primary">
                Falar comigo
              </a>
              <a
                href="https://github.com/Pandora-virus"
                target="_blank"
                rel="noreferrer"
                className="btn btn--ghost"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className={styles.skills}>
            <p className="eyebrow">O que levo para os projetos</p>
            <div className={styles.skillGroup}>
              <h3>Tecnologia e dados</h3>
              <ul>
                <li>Python, SQL e Excel com Pandas</li>
                <li>APIs REST e integrações</li>
                <li>PHP, JavaScript, HTML e CSS</li>
              </ul>
            </div>
            <div className={styles.skillGroup}>
              <h3>Processos e produto</h3>
              <ul>
                <li>Identificação e análise de problemas</li>
                <li>Mapeamento e melhoria de processos</li>
                <li>Automação de tarefas</li>
                <li>Organização e acompanhamento de demandas</li>
              </ul>
            </div>
            <div className={styles.skillGroup}>
              <h3>Relacionamento e comunicação</h3>
              <ul>
                <li>Atendimento e suporte a clientes</li>
                <li>Investigação e resolução de problemas</li>
                <li>Comunicação entre áreas técnicas e de negócio</li>
                <li>Acompanhamento de demandas e expectativas</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
