import {Header} from './Componentes/Header'
import styles from './App.module.css'
import {InputBox} from './Componentes/InputBox'

import './Global.css'


 export function App() {
 return(

  <div>

  <Header></Header>


  <div className={styles.Wrapper}>

  <main >
  <InputBox></InputBox>

  <section className={styles.displayTask}>

    <header></header>

  </section>
  </main>
  </div>

 
  </div>

  

 )
  
}


