import styles from './DisplayTasksWithContent.module.css'
 
 
 export function DisplayTasksWithContent(props){

    
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
         
        <span className={styles.taskCount}>2 de 5</span>
        </strong>
        
    </header>
      
       <div className={styles.taskContainetText}>

       <ul>

        
        {props.tasksContent.map(task=>{

               
      return(
  
     <li
     key={task.id}
     >
       

            {task.content}
            
     </li>
       
  
 
          )
         } )}
        
      </ul>
      
     </div>
      </div>
    )
}