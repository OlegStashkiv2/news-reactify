
import styles from './header.module.css'
import {formatDate} from '../../../helpers/formatDate'

export const Header = () => {
  return (
    <header className={styles.header}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
    </header>
  )
}
