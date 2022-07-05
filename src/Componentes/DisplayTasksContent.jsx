
import styles from './DisplayTasksContent.module.css'
import ClipBoard from '../Assets/Clipboard.png'
 

export function DisplayTasksContent(props){

  console.log(props.tasksContent)
   
  if(props.tasksContent.length == 0){

    return(
      <div>
       <div className={styles.taskContainerIcon}>
      <img src={ClipBoard} className={styles.emptyIcon}></img>
      </div>
       <div className={styles.taskContainetText}>
       <p className={styles.paragraph1}>Você ainda não tem tarefas cadastradas</p>
       <p>Crie tarefas e organize seus itens a fazer</p>
     </div>
      </div>
     
     )


  }else{

    return(
      <div>
       <div className={styles.taskContainerIcon}>
      <img src={ClipBoard} className={styles.emptyIcon}></img>
      </div>
       <div className={styles.taskContainetText}>
       <p className={styles.paragraph1}>Trocar a caixa de areia do gato',
    'Alimentar o gato'</p>
       <p>Crie tarefas e organize seus itens a fazer</p>
     </div>
      </div>
     
     )


  }

    

}