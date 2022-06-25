import styles from './Header.module.css'

export function Header(){

    return(
        <header className={styles.Header}>
          <strong className={styles.to}>to</strong>
          <strong className={styles.do}>do</strong>

        </header>
       
    )
}