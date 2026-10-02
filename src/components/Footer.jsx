import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.inner}`}>
        <p>© {new Date().getFullYear()} Ana Paula. Feito com cuidado.</p>
        <ul className={styles.links}>
          <li>
            <a href="mailto:anaaninha94@gmail.com">E-mail</a>
          </li>
          <li>
            <a href="https://github.com/Pandora-virus" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
