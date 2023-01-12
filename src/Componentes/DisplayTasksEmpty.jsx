import styles from './DisplayTasksEmpty.module.css'
import ClipBoard from '../Assets/Clipboard.png'

export function DisplayTasksEmpty({doneTaskTotalCount}){

    return(
        <div>
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
         
        <span className={styles.taskCount}>{doneTaskTotalCount}</span>
        </strong>
        
    </header>
       <div className={styles.taskContainerIcon}>
      <img src={ClipBoard} className={styles.emptyIcon}></img>
      </div>
       <div className={styles.taskContainetText}>
       <p className={styles.paragraph1}>Você ainda não tem tarefas cadastradas</p>
       <p>Crie tarefas e organize seus itens a fazer</p>
     </div>
      </div>
    )
}