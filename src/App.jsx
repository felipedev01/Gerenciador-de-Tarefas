import {Header} from './Componentes/Header'
import styles from './App.module.css'
import {InputBox} from './Componentes/InputBox'
import ClipBoard from '../src/Assets/Clipboard.png'

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
    <div className={styles.taskContainerIcon}>
    <img src={ClipBoard} className={styles.emptyIcon}></img>
    </div>
    <div className={styles.taskContainetText}>
      <p className={styles.paragraph1}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  </section>
  </main>
  </div>

 
  </div>

  

 )
  
}


