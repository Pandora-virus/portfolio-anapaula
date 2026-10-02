import styles from './Sobre.module.css'

export default function Sobre() {
  return (
    <div className={styles.page}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <p className="eyebrow">Sobre</p>
            <h1>Ana Paula</h1>
            <p>
              Eu projeto e construo produtos digitais de ponta a ponta — da pesquisa com
              usuárias e discovery até o código em produção. Gosto de trabalhar em
              problemas reais, de nicho, onde entender a rotina de quem vai usar o produto
              importa mais do que seguir uma fórmula pronta.
            </p>
            <p>
              O Pontua nasceu assim: não é um ERP genérico, é um assistente pensado pra
              rotina de uma artesã de crochê — com pesquisa real guiando cada decisão de
              precificação e de interface.
            </p>
            <p>
              <a href="mailto:anaaninha94@gmail.com" className="btn btn--primary">
                Falar comigo
              </a>
            </p>
          </div>
          <div>
            <p className="eyebrow">Stack</p>
            <ul className={styles.list}>
              <li>
                Front-end <span>React, Vite, CSS Modules</span>
              </li>
              <li>
                Back-end <span>Node.js, Express, Prisma</span>
              </li>
              <li>
                Banco de dados <span>MySQL</span>
              </li>
              <li>
                Design <span>Figma, design systems, pesquisa com usuárias</span>
              </li>
              <li>
                Autenticação <span>JWT</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
