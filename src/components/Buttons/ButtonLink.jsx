import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export function ButtonLink({ to, children }) {
  return (
    <Link to={to} className={styles.button}>
      {children}
    </Link>
  )
}