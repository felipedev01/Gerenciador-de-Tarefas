import {Header} from './Componentes/Header'
import {InputBox} from './Componentes/InputBox'
import styles from './App.module.css'
import './Global.css'


 export function App() {
 return(

  <div>

  <Header></Header>

  <main className={styles.main}>
    <InputBox></InputBox>

  </main>
  <div>

  </div>
  </div>

  

 )
  
}


