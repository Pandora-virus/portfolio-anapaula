import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const links = [
  { to: '/', label: 'Início', end: true },
  { to: '/projetos', label: 'Projetos' },
  { to: '/sobre', label: 'Sobre' },
]

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.inner}`}>
        <NavLink to="/" className={styles.logo}>
          Ana Paula
        </NavLink>
        <nav>
          <ul className={styles.nav}>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? styles.navActive : undefined)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
