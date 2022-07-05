import {Header} from './Componentes/Header'
import styles from './App.module.css'
import {InputBox} from './Componentes/InputBox'
import { DisplayTasksContent } from './Componentes/DisplayTasksContent'

import './Global.css'


 export function App() {
 return(

  <div>

  <Header></Header>


  <div className={styles.Wrapper}>

  <main >
  <InputBox></InputBox>

  <section className={styles.displayTask}>

    <header>
        <strong>
          <span className={styles.createdTasksText}>
          Tarefas criadas
          </span>
        <span className={styles.taskCount}>0</span>
        </strong>
        
        <strong className={styles.doneTasks}>
          <span className={styles.doneTasksText}>
          Concluídas
          </span>
         
        <span className={styles.taskCount}>0</span>
        </strong>
        
    </header>

    <DisplayTasksContent></DisplayTasksContent>
   
  </section>
  </main>
  </div>

 
  </div>

  

 )
  
}


