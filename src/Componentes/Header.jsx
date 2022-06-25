import styles from './Header.module.css'
import RocketLogo from '../Assets/Rocket2.svg'

export function Header(){

    return(
        <header className={styles.Header}>
          
          <div>
          <img src={RocketLogo} alt="" />
          <strong className={styles.to}>to</strong>
          <strong className={styles.do}>do</strong>
          </div>
         

        </header>
       
    )
}