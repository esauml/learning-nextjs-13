import Link from 'next/link'
import styles from './navigation.module.css'

const links = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Posts',
    href: '/posts'
  }
]

export function Navigation () {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.navigation}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <Link href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
